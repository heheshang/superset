# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
# This file is included in the final Docker image and SHOULD be overridden when
# deploying the image to prod. Settings configured here are intended for use in local
# development environments. Also note that superset_config_docker.py is imported
# as a final step as a means to override "defaults" configured here
#
import math
import logging
import os
from datetime import timedelta
from typing import Any, Dict, Optional
from superset.superset_typing import CacheConfig
from cachelib.file import FileSystemCache
from celery.schedules import crontab
from cachelib.redis import RedisCache
logger = logging.getLogger()


def get_env_variable(var_name: str, default: Optional[str] = None) -> str:
    """Get the environment variable or raise exception."""
    try:
        return os.environ[var_name]
    except KeyError:
        if default is not None:
            return default
        else:
            error_msg = "The environment variable {} was missing, abort...".format(
                var_name
            )
            raise EnvironmentError(error_msg)


DATABASE_DIALECT = get_env_variable("DATABASE_DIALECT")
DATABASE_USER = get_env_variable("DATABASE_USER")
DATABASE_PASSWORD = get_env_variable("DATABASE_PASSWORD")
DATABASE_HOST = get_env_variable("DATABASE_HOST")
DATABASE_PORT = get_env_variable("DATABASE_PORT")
DATABASE_DB = get_env_variable("DATABASE_DB")

# The SQLAlchemy connection string.
SQLALCHEMY_DATABASE_URI = "%s://%s:%s@%s:%s/%s" % (
    DATABASE_DIALECT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_DB,
)



REDIS_PORT = os.environ.get("REDIS_PORT",6379)
REDIS_CELERY_DB = os.environ.get("REDIS_CELERY_DB", 0)
REDIS_RESULTS_DB = os.environ.get("REDIS_RESULTS_DB", 1)
REDIS_CACHE_DB = os.environ.get("REDIS_CACHE_DB", 2)
REDIS_HOST = os.environ.get("REDIS_HOST","redis")
# RESULTS_BACKEND = FileSystemCache("/app/superset_home/sqllab")

CACHE_CONFIG = {
    "CACHE_TYPE": "redis",
    "CACHE_DEFAULT_TIMEOUT": 300,
    "CACHE_KEY_PREFIX": "superset_",
    "CACHE_REDIS_HOST": REDIS_HOST,
    "CACHE_REDIS_PORT": REDIS_PORT,
    "CACHE_REDIS_DB": REDIS_RESULTS_DB,
}
DATA_CACHE_CONFIG = CACHE_CONFIG


# class CeleryConfig(object):
#     BROKER_URL = f"redis://{REDIS_HOST}:{REDIS_PORT}/{REDIS_CELERY_DB}"
#     CELERY_IMPORTS = ("superset.sql_lab",)
#     CELERY_RESULT_BACKEND = f"redis://{REDIS_HOST}:{REDIS_PORT}/{REDIS_RESULTS_DB}"
#     CELERYD_LOG_LEVEL = "DEBUG"
#     CELERYD_PREFETCH_MULTIPLIER = 1
#     CELERY_ACKS_LATE = False
#     CELERYBEAT_SCHEDULE = {
#         "reports.scheduler": {
#             "task": "reports.scheduler",
#             "schedule": crontab(minute="*", hour="*"),
#         },
#         "reports.prune_log": {
#             "task": "reports.prune_log",
#             "schedule": crontab(minute=10, hour=0),
#         },
#     }


# CELERY_CONFIG = CeleryConfig

FEATURE_FLAGS = {"ALERT_REPORTS": True}
ALERT_REPORTS_NOTIFICATION_DRY_RUN = False
# WEBDRIVER_BASEURL = "http://superset:8088/"
# # The base URL for the email report hyperlinks.
# WEBDRIVER_BASEURL_USER_FRIENDLY = WEBDRIVER_BASEURL
LANGUAGES = {
    'zh': {'flag': 'cn', 'name': 'Chinese'},
    'en': {'flag': 'us', 'name': 'English'},
    'fr': {'flag': 'fr', 'name': 'French'},
}

class CeleryConfig:
    broker_url = 'redis://%s:%s/0' % (REDIS_HOST, REDIS_PORT)
    imports = ('superset.sql_lab', "superset.tasks", "superset.tasks.thumbnails", )
    result_backend = 'redis://%s:%s/0' % (REDIS_HOST, REDIS_PORT)
    worker_prefetch_multiplier = 10
    task_acks_late = True
    task_annotations = {
        'sql_lab.get_sql_results': {
            'rate_limit': '100/s',
        },
        'email_reports.send': {
            'rate_limit': '1/s',
            'time_limit': 600,
            'soft_time_limit': 600,
            'ignore_result': True,
        },
    }
    beat_schedule = {
        'reports.scheduler': {
            'task': 'reports.scheduler',
            'schedule': crontab(minute='*', hour='*'),
        },
        'reports.prune_log': {
            'task': 'reports.prune_log',
            'schedule': crontab(minute=0, hour=0),
        },
    }
CELERY_CONFIG = CeleryConfig

SCREENSHOT_LOCATE_WAIT = 100
SCREENSHOT_LOAD_WAIT = 600

# Slack configuration
SLACK_API_TOKEN = "xoxb-"

# Email configuration
SMTP_HOST = "smtp.163.com" # change to your host
SMTP_PORT = 25 # your port, e.g. 587
SMTP_STARTTLS = False # if your SMTP server supports TLS
SMTP_SSL_SERVER_AUTH = False # If your using an SMTP server with a valid certificate
SMTP_SSL = False
SMTP_USER = "shang.shi.kun@163.com" # use the empty string "" if using an unauthenticated SMTP server
SMTP_PASSWORD = "BDBGLEALYBDWIUKH" # use the empty string "" if using an unauthenticated SMTP server
SMTP_MAIL_FROM = "shang.shi.kun@163.com"
EMAIL_REPORTS_SUBJECT_PREFIX = "[Dashboard] " # optional - overwrites default value in config.py of "[Report] "

# WebDriver configuration
# If you use Firefox, you can stick with default values
# If you use Chrome, then add the following WEBDRIVER_TYPE and WEBDRIVER_OPTION_ARGS
# WEBDRIVER_TYPE = "chrome"
# WEBDRIVER_OPTION_ARGS = [
#     "--force-device-scale-factor=2.0",
#     "--high-dpi-support=2.0",
#     "--headless",
#     "--disable-gpu",
#     "--disable-dev-shm-usage",
#     "--no-sandbox",
#     "--disable-setuid-sandbox",
#     "--disable-extensions",
# ]

WEBDRIVER_TYPE = "firefox"

# Window size - this will impact the rendering of the data
WEBDRIVER_WINDOW = {
    "dashboard": (1600, 2000),
    "slice": (3000, 1200),
    "pixel_density": 1,
}

# This is for internal use, you can keep http
WEBDRIVER_BASEURL = "http://superset:8088"
# This is the link sent to the recipient. Change to your domain, e.g. https://superset.mydomain.com
WEBDRIVER_BASEURL_USER_FRIENDLY = "http://52.82.122.156:28088"



SQLLAB_CTAS_NO_LIMIT = True



# CORS Options
ENABLE_CORS = True
CORS_OPTIONS = {"origins": "*", "methods": "*"}


RESULTS_BACKEND = RedisCache(
    host=REDIS_HOST, port=REDIS_PORT, key_prefix='superset_results')

# Default cache for Superset objects
CACHE_CONFIG = {
    "CACHE_TYPE": "RedisCache",
    "CACHE_DEFAULT_TIMEOUT": int(timedelta(minutes=1).total_seconds()),
    "CACHE_KEY_PREFIX": "superset_cache",
    "CACHE_REDIS_URL": f"redis://{REDIS_HOST}:{REDIS_PORT}/{REDIS_CACHE_DB}",
}
# Cache for datasource metadata and query results
DATA_CACHE_CONFIG = {
    **CACHE_CONFIG,
    "CACHE_DEFAULT_TIMEOUT": int(timedelta(seconds=30).total_seconds()),
    "CACHE_KEY_PREFIX": "superset_data_cache",
}
# Cache for dashboard filter state (`CACHE_TYPE` defaults to `SimpleCache` when
#  running in debug mode unless overridden)
FILTER_STATE_CACHE_CONFIG = {
    **CACHE_CONFIG,
    "CACHE_TYPE": "RedisCache",
    "CACHE_THRESHOLD": math.inf,
    "CACHE_DEFAULT_TIMEOUT": int(timedelta(minutes=10).total_seconds()),
}

EXPLORE_FORM_DATA_CACHE_CONFIG = {
    **CACHE_CONFIG,
    "CACHE_TYPE": "RedisCache",
    "CACHE_THRESHOLD": math.inf,
    "CACHE_DEFAULT_TIMEOUT": int(timedelta(minutes=10).total_seconds()),
}
THUMBNAIL_CACHE_CONFIG = {
    **CACHE_CONFIG,
    "CACHE_TYPE": "RedisCache",
    "CACHE_DEFAULT_TIMEOUT": 10000,
    "CACHE_KEY_PREFIX": "superset_thumbnails_",
    "CACHE_REDIS_HOST": REDIS_HOST,
    "CACHE_REDIS_PORT": REDIS_PORT,
    "CACHE_REDIS_DB": REDIS_CELERY_DB,
}
# kbiTPCiSiAC2PTe1i9x1tXjUr5+geNiWWRFKG4vtf0C2pvBbqVxuGwq6
SECRET_KEY ='kbiTPCiSiAC2PTe1i9x1tXjUr5+geNiWWRFKG4vtf0C2pvBbqVxuGwq6'
# SECRET_KEY ='CHANGE_ME_TO_A_COMPLEX_RANDOM_SECRET'

APP_NAME = "SAMSUNG"

# Specify the App icon
# APP_ICON = "/app/docker/static/assets/images/superset-logo-horiz.png"

#
# Optionally import superset_config_docker.py (which will have been included on
# the PYTHONPATH) in order to allow for local settings to be overridden
#
try:
    import superset_config_docker
    from superset_config_docker import *  # noqa

    logger.info(
        f"Loaded your Docker configuration at " f"[{superset_config_docker.__file__}]"
    )
except ImportError:
    logger.info("Using default Docker config...")



