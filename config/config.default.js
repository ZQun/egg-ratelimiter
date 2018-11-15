"use strict";
module.exports = appInfo => {
    const config = exports = {};
    config.proxy = true;
    config.ratelimiter = {
        app: true,
        headers: {
            remaining: 'X-RateLimit-Remaining',
            reset: 'X-RateLimit-Reset',
            total: 'X-RateLimit-Limit'
        },
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL3BsdWdpbi9lZ2ctcmF0ZWxpbWl0ZXIvY29uZmlnL2NvbmZpZy5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFBUyxPQUFPLENBQUMsRUFBRTtJQUNmLE1BQU0sTUFBTSxHQUFRLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFFakMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFFcEIsTUFBTSxDQUFDLFdBQVcsR0FBRztRQUNqQixHQUFHLEVBQUUsSUFBSTtRQUNULE9BQU8sRUFBRTtZQUNMLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixLQUFLLEVBQUUsbUJBQW1CO1NBQzdCO0tBQ0osQ0FBQTtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQSJ9