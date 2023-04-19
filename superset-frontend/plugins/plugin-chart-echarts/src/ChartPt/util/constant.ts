import { ICustomColdata } from '../types';

const netRevenueTitle = 'Net Revenue';
const netRevenueDaily = '$12.8M';
const netRevenueDailyDoD = '0.76x';
const netRevenueDailyDoDToolTip =
  'Net Revenue As of Date Current-Previous Date';
const netRevenueDailyYoY = '0.90x';
const netRevenueDailyYoYToolTip =
  'Net Revenue As of Date Current-Previous Year';
const netRevenueWeekly = '$29.5M';
const netRevenueWeeklyWoW = '0.91x';
const netRevenueWeeklyWoWToolTip = 'Net Revenue WTD  Current-Previous Week';
const netRevenueWeeklyYoY = '1.04x';
const netRevenueWeeklyYoYToolTip = 'Net Revenue WTD  Current-Previous Year';
const netRevenueMonthly = '$260.7M';
const netRevenueMonthlyMoM = '0.85x';
const netRevenueMonthlyMoMToolTip = 'Net Revenue MTD  Current-Previous Month';
const netRevenueMonthlyYoY = '1.09x';
const netRevenueMonthlyYoYToolTip = 'Net Revenue MTD  Current-Previous Year';
const netRevenueQuarterly = '$260.7M';
const netRevenueQuarterlyQoQ = '1.17x';
const netRevenueQuarterlyQoQToolTip =
  'Net Revenue QTD  Current-Previous Quarter';
const netRevenueQuarterlyYoY = '1.09x';
const netRevenueQuarterlyYoYToolTip = 'Net Revenue QTD  Current-Previous Year';
const netRevenueYearly = '$2,322.0M';
const netRevenueYearlyYoY = '1.12x';
const netRevenueYearlyYoYToolTip = 'Net Revenue YTD  Current-Previous Year';

const shopperVisitsTitle = 'Shopper Visits';
const shopperVisitsDaily = '6.5M';
const shopperVisitsDailyDoD = '0.77x';
const shopperVisitsDailyDoDToolTip =
  'Shopper Visits As of Date Current-Previous Date';
const shopperVisitsDailyYoY = '0.80x';
const shopperVisitsDailyYoYToolTip =
  'Shopper Visits As of Date Current-Previous Year';
const shopperVisitsWeekly = '15.0M';
const shopperVisitsWeeklyWoW = '0.96x';
const shopperVisitsWeeklyWoWToolTip =
  'Shopper Visits WTD  Current-Previous Week';
const shopperVisitsWeeklyYoY = '0.90x';
const shopperVisitsWeeklyYoYToolTip =
  'Shopper Visits WTD  Current-Previous Year';
const shopperVisitsMonthly = '141.3M';
const shopperVisitsMonthlyMoM = '0.95x';
const shopperVisitsMonthlyMoMToolTip =
  'Shopper Visits MTD  Current-Previous Month';
const shopperVisitsMonthlyYoY = '1.08x';
const shopperVisitsMonthlyYoYToolTip =
  'Shopper Visits MTD  Current-Previous Year';
const shopperVisitsQuarterly = '141.3M';
const shopperVisitsQuarterlyQoQ = '0.95x';
const shopperVisitsQuarterlyQoQToolTip =
  'Shopper Visits QTD  Current-Previous Quarter';
const shopperVisitsQuarterlyYoY = '1.08x';
const shopperVisitsQuarterlyYoYToolTip =
  'Shopper Visits QTD  Current-Previous Year';
const shopperVisitsYearly = '923.9M';
const shopperVisitsYearlyYoY = '1.08x';
const shopperVisitsYearlyYoYToolTip =
  'Shopper Visits YTD  Current-Previous Year';

const conversionTitle = 'Conversion';
const conversionDaily = '0.38%';
const conversionDailyDoD = '0.02%p';
const conversionDailyDoDToolTip = 'Conversion As of Date Current-Previous Date';
const conversionDailyYoY = '0.02%p';
const conversionDailyYoYToolTip = 'Conversion As of Date Current-Previous Year';
const conversionWeekly = '0.40%';
const conversionWeeklyWoW = '0.06%p';
const conversionWeeklyWoWToolTip = 'Conversion WTD  Current-Previous Week';
const conversionWeeklyYoY = '0.05%p';
const conversionWeeklyYoYToolTip = 'Conversion WTD  Current-Previous Year';
const conversionMonthly = '0.40%';
const conversionMonthlyMoM = '0.02%p';
const conversionMonthlyMoMToolTip = 'Conversion MTD  Current-Previous Month';
const conversionMonthlyYoY = '0.01%p';
const conversionMonthlyYoYToolTip = 'Conversion MTD  Current-Previous Year';
const conversionQuarterly = '0.40%';
const conversionQuarterlyQoQ = '-';
const conversionQuarterlyQoQToolTip =
  'Conversion QTD  Current-Previous Quarter';
const conversionQuarterlyYoY = '0.01%p';
const conversionQuarterlyYoYToolTip = 'Conversion QTD  Current-Previous Year';
const conversionYearly = '0.45%';
const conversionYearlyYoY = '-';
const conversionYearlyYoYToolTip = 'Conversion YTD  Current-Previous Year';

const cancelAmountTitle = 'Cancel Amount(%)';
const cancelAmountDaily = '5.9%';
const cancelAmountDailyDoD = '7.4%p';
const cancelAmountDailyDoDToolTip =
  'Cancel Amount As of Date Current-Previous Date';
const cancelAmountDailyYoY = '5.7%p';
const cancelAmountDailyYoYToolTip =
  'Cancel Amount As of Date Current-Previous Year';
const cancelAmountWeekly = '10.2%';
const cancelAmountWeeklyWoW = '4.5%p';
const cancelAmountWeeklyWoWToolTip = 'Cancel Amount WTD  Current-Previous Week';
const cancelAmountWeeklyYoY = '1.1%p';
const cancelAmountWeeklyYoYToolTip = 'Cancel Amount WTD  Current-Previous Year';
const cancelAmountMonthly = '14.8%';
const cancelAmountMonthlyMoM = '0.7%p';
const cancelAmountMonthlyMoMToolTip =
  'Cancel Amount MTD  Current-Previous Month';
const cancelAmountMonthlyYoY = '2.9%p';
const cancelAmountMonthlyYoYToolTip =
  'Cancel Amount MTD  Current-Previous Year';
const cancelAmountQuarterly = '14.8%';
const cancelAmountQuarterlyQoQ = '2.5%p';
const cancelAmountQuarterlyQoQToolTip =
  'Cancel Amount QTD  Current-Previous Quarter';
const cancelAmountQuarterlyYoY = '2.9%p';
const cancelAmountQuarterlyYoYToolTip =
  'Cancel Amount QTD  Current-Previous Year';
const cancelAmountYearly = '14.4%';
const cancelAmountYearlyYoY = '1.9%p';
const cancelAmountYearlyYoYToolTip = 'Cancel Amount YTD  Current-Previous Year';

const returnAmountTitle = 'Return Amount(%)';
const returnAmountDaily = '0.0%';
const returnAmountDailyDoD = '0.3%p';
const returnAmountDailyDoDToolTip =
  'Return Amount As of Date Current-Previous Date';
const returnAmountDailyYoY = '2.0%p';
const returnAmountDailyYoYToolTip =
  'Return Amount As of Date Current-Previous Year';
const returnAmountWeekly = '0.2%';
const returnAmountWeeklyWoW = '0.2%p';
const returnAmountWeeklyWoWToolTip = 'Return Amount WTD  Current-Previous Week';
const returnAmountWeeklyYoY = '1.9%p';
const returnAmountWeeklyYoYToolTip = 'Return Amount WTD  Current-Previous Year';
const returnAmountMonthly = '0.5%';
const returnAmountMonthlyMoM = '1.1%p';
const returnAmountMonthlyMoMToolTip =
  'Return Amount MTD  Current-Previous Month';
const returnAmountMonthlyYoY = '1.7%p';
const returnAmountMonthlyYoYToolTip =
  'Return Amount MTD  Current-Previous Year';
const returnAmountQuarterly = '0.5%';
const returnAmountQuarterlyQoQ = '1.3%p';
const returnAmountQuarterlyQoQToolTip =
  'Return Amount QTD  Current-Previous Quarter';
const returnAmountQuarterlyYoY = '1.7%p';
const returnAmountQuarterlyYoYToolTip =
  'Return Amount QTD  Current-Previous Year';
const returnAmountYearly = '1.5%';
const returnAmountYearlyYoY = '1.5%p';
const returnAmountYearlyYoYToolTip = 'Return Amount YTD  Current-Previous Year';

const date = `${new Date().getFullYear()}/${
  new Date().getUTCMonth() + 1
}/${new Date().getDate()}`;

const customColList: ICustomColdata[] = [
  {
    Title: '\u00A0',
    Daily: date,
    DailyDoD: 'DoD',
    DailyYoY: 'YoY',
    Weekly: 'WTD',
    WeeklyWoW: 'WoW',
    WeeklyYoY: 'YoY',
    Monthly: 'MTD',
    MonthlyMoM: 'MoM',
    MonthlyYoY: 'YoY',
    Quarterly: 'QTD',
    QuarterlyQoQ: 'QoQ',
    QuarterlyYoY: 'YoY',
    Yearly: 'YTD',
    YearlyYoY: 'YoY',
    DailyDoDToolTip: '',
    DailyYoYToolTip: '',
    WeeklyWoWToolTip: '',
    WeeklyYoYToolTip: '',
    MonthlyMoMToolTip: '',
    MonthlyYoYToolTip: '',
    QuarterlyQoQToolTip: '',
    QuarterlyYoYToolTip: '',
    YearlyYoYToolTip: '',
  },
  {
    Title: netRevenueTitle,
    Daily: netRevenueDaily,
    DailyDoD: netRevenueDailyDoD,
    DailyYoY: netRevenueDailyYoY,
    Weekly: netRevenueWeekly,
    WeeklyWoW: netRevenueWeeklyWoW,
    WeeklyYoY: netRevenueWeeklyYoY,
    Monthly: netRevenueMonthly,
    MonthlyMoM: netRevenueMonthlyMoM,
    MonthlyYoY: netRevenueMonthlyYoY,
    Quarterly: netRevenueQuarterly,
    QuarterlyQoQ: netRevenueQuarterlyQoQ,
    QuarterlyYoY: netRevenueQuarterlyYoY,
    Yearly: netRevenueYearly,
    YearlyYoY: netRevenueYearlyYoY,
    DailyDoDToolTip: netRevenueDailyDoDToolTip,
    DailyYoYToolTip: netRevenueDailyYoYToolTip,
    WeeklyWoWToolTip: netRevenueWeeklyWoWToolTip,
    WeeklyYoYToolTip: netRevenueWeeklyYoYToolTip,
    MonthlyMoMToolTip: netRevenueMonthlyMoMToolTip,
    MonthlyYoYToolTip: netRevenueMonthlyYoYToolTip,
    QuarterlyQoQToolTip: netRevenueQuarterlyQoQToolTip,
    QuarterlyYoYToolTip: netRevenueQuarterlyYoYToolTip,
    YearlyYoYToolTip: netRevenueYearlyYoYToolTip,
  },
  {
    Title: shopperVisitsTitle,
    Daily: shopperVisitsDaily,
    DailyDoD: shopperVisitsDailyDoD,
    DailyYoY: shopperVisitsDailyYoY,
    Weekly: shopperVisitsWeekly,
    WeeklyWoW: shopperVisitsWeeklyWoW,
    WeeklyYoY: shopperVisitsWeeklyYoY,
    Monthly: shopperVisitsMonthly,
    MonthlyMoM: shopperVisitsMonthlyMoM,
    MonthlyYoY: shopperVisitsMonthlyYoY,
    Quarterly: shopperVisitsQuarterly,
    QuarterlyQoQ: shopperVisitsQuarterlyQoQ,
    QuarterlyYoY: shopperVisitsQuarterlyYoY,
    Yearly: shopperVisitsYearly,
    YearlyYoY: shopperVisitsYearlyYoY,
    DailyDoDToolTip: shopperVisitsDailyDoDToolTip,
    DailyYoYToolTip: shopperVisitsDailyYoYToolTip,
    WeeklyWoWToolTip: shopperVisitsWeeklyWoWToolTip,
    WeeklyYoYToolTip: shopperVisitsWeeklyYoYToolTip,
    MonthlyMoMToolTip: shopperVisitsMonthlyMoMToolTip,
    MonthlyYoYToolTip: shopperVisitsMonthlyYoYToolTip,
    QuarterlyQoQToolTip: shopperVisitsQuarterlyQoQToolTip,
    QuarterlyYoYToolTip: shopperVisitsQuarterlyYoYToolTip,
    YearlyYoYToolTip: shopperVisitsYearlyYoYToolTip,
  },
  {
    Title: conversionTitle,
    Daily: conversionDaily,
    DailyDoD: conversionDailyDoD,
    DailyYoY: conversionDailyYoY,
    Weekly: conversionWeekly,
    WeeklyWoW: conversionWeeklyWoW,
    WeeklyYoY: conversionWeeklyYoY,
    Monthly: conversionMonthly,
    MonthlyMoM: conversionMonthlyMoM,
    MonthlyYoY: conversionMonthlyYoY,
    Quarterly: conversionQuarterly,
    QuarterlyQoQ: conversionQuarterlyQoQ,
    QuarterlyYoY: conversionQuarterlyYoY,
    Yearly: conversionYearly,
    YearlyYoY: conversionYearlyYoY,
    DailyDoDToolTip: conversionDailyDoDToolTip,
    DailyYoYToolTip: conversionDailyYoYToolTip,
    WeeklyWoWToolTip: conversionWeeklyWoWToolTip,
    WeeklyYoYToolTip: conversionWeeklyYoYToolTip,
    MonthlyMoMToolTip: conversionMonthlyMoMToolTip,
    MonthlyYoYToolTip: conversionMonthlyYoYToolTip,
    QuarterlyQoQToolTip: conversionQuarterlyQoQToolTip,
    QuarterlyYoYToolTip: conversionQuarterlyYoYToolTip,
    YearlyYoYToolTip: conversionYearlyYoYToolTip,
  },
  {
    Title: cancelAmountTitle,
    Daily: cancelAmountDaily,
    DailyDoD: cancelAmountDailyDoD,
    DailyYoY: cancelAmountDailyYoY,
    Weekly: cancelAmountWeekly,
    WeeklyWoW: cancelAmountWeeklyWoW,
    WeeklyYoY: cancelAmountWeeklyYoY,
    Monthly: cancelAmountMonthly,
    MonthlyMoM: cancelAmountMonthlyMoM,
    MonthlyYoY: cancelAmountMonthlyYoY,
    Quarterly: cancelAmountQuarterly,
    QuarterlyQoQ: cancelAmountQuarterlyQoQ,
    QuarterlyYoY: cancelAmountQuarterlyYoY,
    Yearly: cancelAmountYearly,
    YearlyYoY: cancelAmountYearlyYoY,
    DailyDoDToolTip: cancelAmountDailyDoDToolTip,
    DailyYoYToolTip: cancelAmountDailyYoYToolTip,
    WeeklyWoWToolTip: cancelAmountWeeklyWoWToolTip,
    WeeklyYoYToolTip: cancelAmountWeeklyYoYToolTip,
    MonthlyMoMToolTip: cancelAmountMonthlyMoMToolTip,
    MonthlyYoYToolTip: cancelAmountMonthlyYoYToolTip,
    QuarterlyQoQToolTip: cancelAmountQuarterlyQoQToolTip,
    QuarterlyYoYToolTip: cancelAmountQuarterlyYoYToolTip,
    YearlyYoYToolTip: cancelAmountYearlyYoYToolTip,
  },
  {
    Title: returnAmountTitle,
    Daily: returnAmountDaily,
    DailyDoD: returnAmountDailyDoD,
    DailyYoY: returnAmountDailyYoY,
    Weekly: returnAmountWeekly,
    WeeklyWoW: returnAmountWeeklyWoW,
    WeeklyYoY: returnAmountWeeklyYoY,
    Monthly: returnAmountMonthly,
    MonthlyMoM: returnAmountMonthlyMoM,
    MonthlyYoY: returnAmountMonthlyYoY,
    Quarterly: returnAmountQuarterly,
    QuarterlyQoQ: returnAmountQuarterlyQoQ,
    QuarterlyYoY: returnAmountQuarterlyYoY,
    Yearly: returnAmountYearly,
    YearlyYoY: returnAmountYearlyYoY,
    DailyDoDToolTip: returnAmountDailyDoDToolTip,
    DailyYoYToolTip: returnAmountDailyYoYToolTip,
    WeeklyWoWToolTip: returnAmountWeeklyWoWToolTip,
    WeeklyYoYToolTip: returnAmountWeeklyYoYToolTip,
    MonthlyMoMToolTip: returnAmountMonthlyMoMToolTip,
    MonthlyYoYToolTip: returnAmountMonthlyYoYToolTip,
    QuarterlyQoQToolTip: returnAmountQuarterlyQoQToolTip,
    QuarterlyYoYToolTip: returnAmountQuarterlyYoYToolTip,
    YearlyYoYToolTip: returnAmountYearlyYoYToolTip,
  },
];

export default customColList;

export {
  netRevenueTitle,
  netRevenueDaily,
  netRevenueDailyDoD,
  netRevenueDailyYoY,
  netRevenueWeekly,
  netRevenueWeeklyWoW,
  netRevenueWeeklyYoY,
  netRevenueMonthly,
  netRevenueMonthlyMoM,
  netRevenueMonthlyYoY,
  netRevenueQuarterly,
  netRevenueQuarterlyQoQ,
  netRevenueQuarterlyYoY,
  netRevenueYearly,
  netRevenueYearlyYoY,
  netRevenueDailyDoDToolTip,
  netRevenueDailyYoYToolTip,
  netRevenueWeeklyWoWToolTip,
  netRevenueWeeklyYoYToolTip,
  netRevenueMonthlyMoMToolTip,
  netRevenueMonthlyYoYToolTip,
  netRevenueQuarterlyQoQToolTip,
  netRevenueQuarterlyYoYToolTip,
};
export {
  shopperVisitsTitle,
  shopperVisitsDaily,
  shopperVisitsDailyDoD,
  shopperVisitsDailyYoY,
  shopperVisitsWeekly,
  shopperVisitsWeeklyWoW,
  shopperVisitsWeeklyYoY,
  shopperVisitsMonthly,
  shopperVisitsMonthlyMoM,
  shopperVisitsMonthlyYoY,
  shopperVisitsQuarterly,
  shopperVisitsQuarterlyQoQ,
  shopperVisitsQuarterlyYoY,
  shopperVisitsYearly,
  shopperVisitsYearlyYoY,
};
export {
  conversionTitle,
  conversionDaily,
  conversionDailyDoD,
  conversionDailyYoY,
  conversionWeekly,
  conversionWeeklyWoW,
  conversionWeeklyYoY,
  conversionMonthly,
  conversionMonthlyMoM,
  conversionMonthlyYoY,
  conversionQuarterly,
  conversionQuarterlyQoQ,
  conversionQuarterlyYoY,
  conversionYearly,
  conversionYearlyYoY,
};
export {
  cancelAmountTitle,
  cancelAmountDaily,
  cancelAmountDailyDoD,
  cancelAmountDailyYoY,
  cancelAmountWeekly,
  cancelAmountWeeklyWoW,
  cancelAmountWeeklyYoY,
  cancelAmountMonthly,
  cancelAmountMonthlyMoM,
  cancelAmountMonthlyYoY,
  cancelAmountQuarterly,
  cancelAmountQuarterlyQoQ,
  cancelAmountQuarterlyYoY,
  cancelAmountYearly,
  cancelAmountYearlyYoY,
};
export {
  returnAmountTitle,
  returnAmountDaily,
  returnAmountDailyDoD,
  returnAmountDailyYoY,
  returnAmountWeekly,
  returnAmountWeeklyWoW,
  returnAmountWeeklyYoY,
  returnAmountMonthly,
  returnAmountMonthlyMoM,
  returnAmountMonthlyYoY,
  returnAmountQuarterly,
  returnAmountQuarterlyQoQ,
  returnAmountQuarterlyYoY,
  returnAmountYearly,
  returnAmountYearlyYoY,
};
