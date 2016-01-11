var DailyClean = {
    city_to_zones: function (t, e) {
        "" != t && $.ajax({
            url: "/ajax/city_to_zones",
            type: "POST",
            data: {city_id: t},
            dataType: "html",
            error: function () {
                alert("Sorry，讀取資料失敗，請重試或聯絡站方，謝謝。")
            },
            success: function (t) {
                e.html(t)
            }
        })
    },
    mrt_line_to_sites: function (t, e, n) {
        "" != t && $.ajax({
            url: "/ajax/mrt_line_to_sites",
            type: "POST",
            data: {mrt_line_id: t, decoration: n},
            dataType: "html",
            error: function () {
                alert("Sorry，讀取資料失敗，請重試或聯絡站方，謝謝。")
            },
            success: function (t) {
                e.html(t)
            }
        })
    }
};

function check_submit() {

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

    if ($.trim($("#clean_date").val()) == "") {
        alert("請選擇預約日期");
        $("#clean_date").focus();
        return false;
    }

    if ($("input[type=radio][name=order\\[detailed_time\\]]:checked").size() == 0) {
        alert("請選擇預約時段");
        return false;
    }

    if ($('input[rel="wish_wday"]:checked').size() == 0) {
        alert("請選擇希望預約時段");
        return false;
    }

    if ($("#payment_atm").prop("checked") && $.trim($("#order_bank5code").val()) == "") {
        alert("請填寫匯款帳號後五碼");
        $("#order_bank5code").focus();
        return false;
    }


    if (!is_old_customer) {

        if ($.trim($("#order_mrt_site_id").val()) == "") {
            alert("請選擇鄰近的捷運站");
            $("#order_mrt_site_id").focus();
            return false;
        }

        if ($.trim($("#order_address").val()) == "") {
            alert("請填寫完整地址");
            $("#order_address").focus();
            return false;
        }

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

    $('#term_modal').modal('show');
}