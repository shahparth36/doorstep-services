// https://www.linkedin.com/in/shubham-pravin-patil/
const maps = [
    {
        title : 'All Android Users',
        id    : 'all-android-users',
        url   : 'https://qgiscloud.com/shahparth/android_users/'
    },
    {
        title : 'All IOS Users',
        id    : 'all-ios-users',
        url   : 'https://qgiscloud.com/shahparth/IOS_users/'
    },
    {
        title : 'Users with Online Payment',
        id    : 'users-with-online-payment',
        url   : 'https://qgiscloud.com/shahparth/online_payment/'
    },
    {
        title : 'Users with COD',
        id    : 'users-with-cod',
        url   : 'https://qgiscloud.com/shahparth/COD_payment/'
    },
    {
        title : 'Premium Members',
        id    : 'premium-members',
        url   : 'https://qgiscloud.com/shahparth/premium_members/'
    },
    {
        title : 'Users with atleast 10 orders',
        id    : 'Users-with-atleast-10-orders',
        url   : 'https://qgiscloud.com/shahparth/atleast_10_members/'
    },
    {
        title : 'Hotspots with Maximum Users In That Region',
        id    : 'hotspots-with-maximum-users-in-that-region',
        url   :
            'https://qgiscloud.com/shahparth/max_orders_traffic/?bl=&l=IOS_users!%2Conline_payment!%2CCOD_payment!%2Cpremium_members!%2Catleast_10_orders!%2Cmax_users_area%5B45%5D%2Candroid_users!%2Cleast_order_regions%5B47%5D!%2Cmax_order_traffic%5B42%5D!%2CDataset!%2COSM%20Standard&t=max_orders_traffic&e=72.41784%2C18.84862%2C73.43781%2C19.3347'
    },
    {
        title : 'Hotspots with Maximum Order Traffic',
        id    : 'hotspots-with-maximum-order-traffic',
        url   :
            'https://qgiscloud.com/shahparth/max_orders_traffic/?bl=&l=IOS_users!%2Conline_payment!%2CCOD_payment!%2Cpremium_members!%2Catleast_10_orders!%2Cmax_users_area!%2Candroid_users!%2Cleast_order_regions!%2Cmax_order_traffic%5B42%5D%2CDataset!%2COSM%20Standard&t=max_orders_traffic&e=72.3926%2C18.80307%2C73.61088%2C19.38366'
    },
    {
        title : 'Areas Where Company Gets Less Orders',
        id    : 'areas-where-company-gets-less-orders',
        url   :
            'https://qgiscloud.com/shahparth/max_orders_traffic/?bl=&l=IOS_users!%2Conline_payment!%2CCOD_payment!%2Cpremium_members!%2Catleast_10_orders!%2Cmax_users_area!%2Candroid_users!%2Cleast_order_regions%5B47%5D%2Cmax_order_traffic%5B42%5D!%2CDataset!%2COSM%20Standard&t=max_orders_traffic&e=72.42049%2C18.83694%2C73.44047%2C19.32302'
    },
    {
        title : 'Users Who Are Non-Cooperative Due To Delayed Service Time',
        id    : 'Users-Who-Are-Non-Cooperative-Due-To-Delayed-Service-Time',
        url   : ''
    },
    {
        title : 'Users Who Have Given Best Reviews And Ratings To Company',
        id    : 'users-who-have-given-best-reviews-and-ratings-to-company',
        url   : ''
    },
    {
        title : 'Regions With Maximum Traffic Causing Delays',
        id    : 'regions-with-maximum-traffic-causing-delays',
        url   :
            'https://qgiscloud.com/shahparth/most_traffic_causing_delay/?bl=mapnik&l=most_traffic_causing_delay%5B54%5D&t=most_traffic_causing_delay&e=8041142%2C2121900%2C8203702%2C2201698'
    },
    {
        title : 'Users Who Have Given Least Reviews',
        id    : 'users-who-have-given-least-reviews',
        url   : ''
    },
    {
        title : 'Users Who Are Non-Premium Members And Use Android',
        id    : 'users-who-are-non-premium-members-and-use-android',
        url   : 'https://qgiscloud.com/shahparth/non_premium_users_with_android/'
    },
    {
        title : 'Users Who Are Non-Premium Members And Use IOS',
        id    : 'users-who-are-non-premium-members-and-use-ios',
        url   : 'https://qgiscloud.com/shahparth/non_premium_users_with_ios/'
    },
    {
        title : 'Users who have used pest control services at least once',
        id    : 'users-who-have-used-pest-control-services-at-least-once',
        url   : 'https://qgiscloud.com/shahparth/used_pest_control_atleast_once/'
    },
    {
        title : 'Top 16users Who Use AC Servicing',
        id    : ' Top-16users-who-use-ac-servicing',
        url   : 'https://qgiscloud.com/shahparth/top_16_ac_servicing_users/'
    },
    {
        title : 'Users Who Have Used House Cleaning Services More Than Three Times',
        id    : 'users-who-have-used-house-cleaning-services-more-than-three-times',
        url   : 'https://qgiscloud.com/shahparth/used_house_cleaning_more_than_thrice/'
    },
    {
        title : 'Users Who Prefer Cash On Delivery And Pay Orders Above 5000',
        id    : 'users-who-prefer-cash-on-delivery-and-pay-orders-above-5000',
        url   : 'https://qgiscloud.com/shahparth/COD_and_greater_than_5000/'
    },
    {
        title : 'Users Who Prefer Online Payment And Orders Between 10000 To 20000',
        id    : 'Users-who-prefer-online-payment-and-orders-between-10000-to-20000',
        url   : 'https://qgiscloud.com/shahparth/Online_between_10k20k/'
    },
    {
        title : 'Hotspots From Where There Are Maximum Orders',
        id    : 'hotspots-from-where-there-are-maximum-orders',
        url   :
            'https://qgiscloud.com/shahparth/Most_Orders_heatmap/?bl=mapnik&l=IGT%20DATASET%20-%20Sheet1%5B32%5D&t=Most_Orders_heatmap&e=8086176%2C2144622%2C8167456%2C2182828'
    },
    {
        title : 'Users Who Have Ordered At Least 10 Times',
        id    : 'users-who-have-ordered-at-least-10-times',
        url   : 'https://qgiscloud.com/shahparth/Atleast_10orders/'
    },
    {
        title : 'Users Having Age Between 20 To 40',
        id    : 'users-having-age-between-20-to-40',
        url   : 'https://qgiscloud.com/shahparth/age_between_20_40/'
    },
    {
        title : 'Users Who Are Senior Citizens',
        id    : 'users-who-are-senior-citizens',
        url   : 'https://qgiscloud.com/shahparth/Senior_citizens/'
    },
    {
        title : 'Hotspots for sales',
        id    : 'hotspots-for-sales',
        url   :
            'https://qgiscloud.com/shahparth/Max_Sales/?bl=mapnik&l=IGT%20DATASET%20-%20Sheet1%5B24%5D&t=Max_Sales&e=8084072%2C2145964%2C8165352%2C2184169'
    },
    {
        title : 'Android Users Who Prefer COD',
        id    : 'android-users-who-prefer-cod',
        url   : 'https://qgiscloud.com/shahparth/Android_and_Cod/'
    },
    {
        title : 'IOS Users Who Prefer COD',
        id    : 'ios-users-who-prefer-cod',
        url   : 'https://qgiscloud.com/shahparth/Android_and_Cod/'
    }
];

export default maps;
