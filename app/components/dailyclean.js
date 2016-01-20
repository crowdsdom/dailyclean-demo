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
        {title: '請確認'}
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

    $rootScope.checkSubmit = function () {

        if ($rootScope.progress == 1){



            if ($.trim($("#order_name").val()) == "") {
                alert("請填寫完整姓名");
                $("#order_name").focus();
                return false;
            }

            if ($.trim($("#order_phone").val()).length < 10) {
                alert("電話號碼不足十碼");
                $("#order_phone").focus();
                return false;
            }

            if ($.trim($("#order_email").val()) == "") {
                alert("請填寫E-mail地址");
                $("#order_email").focus();
                return false;
            }



            if ($rootScope.newCustomer) {
                console.log($rootScope.formData.selectedMRT);
                if ($.trim($("#order_mrt_site_id_" + $rootScope.formData.selectedMRT).val()) == "") {
                    alert("請選擇鄰近的捷運站");
                    $("#order_mrt_site_id_" + $rootScope.selectedMRT).focus();
                    return false;
                }

                if ($.trim($("#order_address").val()) == "") {
                    alert("請填寫完整地址");
                    $("#order_address").focus();
                    return false;
                }



                if ($.trim($("#order_room_size").val()) == "") {
                    alert("請填寫坪數");
                    $("#order_room_size").focus();
                    return false;
                }

                if ($.trim($("#order_room_count").val()) == "") {
                    alert("請填寫格局");
                    $("#order_room_count").focus();
                    return false;
                }

            }

        }


        if ($rootScope.progress == 2){
            if ($.trim($("#clean_date").val()) == "") {
                alert("請選擇預約日期");
                $("#clean_date").focus();
                return false;
            }

            if ($("input[type=radio][name=order\\[detailed_time\\]]:checked").size() == 0) {
                alert("請選擇預約時間");
                return false;
            }

            if ($rootScope.repeat_need == true){
                if ($("input[type=radio][name=repeat_order\\[detailed_time\\]]:checked").size() == 0) {
                    alert("請選擇定期預約之時間");
                    return false;
                }

                if ($('input[rel="wish_wday"]:checked').size() == 0) {
                    alert("請選擇定期預約之時段");
                    return false;
                }

            }

        }


        if($rootScope.progress == 3){

            if ($("#payment_atm").prop("checked") && $.trim($("#order_bank5code").val()) == "") {
                alert("請填寫匯款帳號後五碼");
                $("#order_bank5code").focus();
                return false;
            }

            if ($rootScope.newCustomer){

                if ($("#know_us_keyword").prop("checked") && $.trim($("#order_know_us_keyword").val()) == "") {
                    alert("請填寫關鍵字");
                    $("#order_know_us_keyword").focus();
                    return false;
                }
                else if ($("#know_us_other").prop("checked") && $.trim($("#order_know_us_other").val()) == "") {
                    alert("請填寫如何得知天天清潔");
                    $("#know_us_other").focus();
                    return false;
                }

            }

            alert("預約成功");
        }else{
            $rootScope.nextStep();
            $('html,body').scrollTop(0);

        }


    };


    $rootScope.setCustomer = function(newCustomer) {
        $rootScope.newCustomer = newCustomer;
    };

    $rootScope.setServiceLevel = function(serviceLevel) {
        $rootScope.serviceLevel = serviceLevel;
    };

    $rootScope.setRepeat = function(repeat_need) {
        $rootScope.repeat_need = repeat_need;
    };

    $rootScope.formData = {};
    $rootScope.formData.selectedMRT = "0";
    $rootScope.selectedMRT = "0";
    /** Calendar */
    $rootScope.calendarSelected = null;
    $rootScope.cleanDate = '';
    $rootScope.$watch('calendarSelected', function () {
        $rootScope.cleanDate = $rootScope.calendarSelected.format('YYYY-MM-DD');
    });
    $rootScope.newCustomer = true;
    $rootScope.serviceLevel = 1;
    $rootScope.repeat_need = false;
});