angular.module('nibs.config', [])

    .constant('SERVER_URL', null)

    .constant('FB_APP_ID','1618878675020266')

    .constant('STATUS_LABELS', [
        'Bronze',
        'Silver',
        'Gold'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Bronze members enjoy 10% off all Food and Beverage and facilities/services.',
        'Silver members enjoy 20% off all Food and Beverage and facilities/services.',
        'Gold members enjoy 30% off all Food and Beverage and facilities/services.'
    ]);
