'use strict';

angular.module('dailyclean', [
    'dailyclean.calendar',
    'dailyclean.myProgress'
])

.config(function () {
    moment.locale('zh-TW');
})

.run(function ($rootScope) {
    /** Progress */
    $rootScope.progress = 0;

    $rootScope.steps = [
        {title: '選服務'},
        {title: '填資料'},
        {title: '約時間'},
        {title: '屋況'},
        {title: '確認'}
    ];

    $rootScope.nextStep = function () {
        if ($rootScope.progress < $rootScope.steps.length - 1) {
            $rootScope.progress++;
        }
    };

    $rootScope.prevStep = function () {
        if ($rootScope.progress > 0) {
            $rootScope.progress--;
        }
    };

    /** Calendar */
    $rootScope.calendarSelected = null;
    $rootScope.cleanDate = '';
    $rootScope.$watch('calendarSelected', function () {
        $rootScope.cleanDate = $rootScope.calendarSelected.format('YYYY-MM-DD');
    });
});