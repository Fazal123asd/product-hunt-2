import moment from "moment";

// find time difference in years
export const getDifferenceYears = (time) => moment().diff(time, 'years',false)