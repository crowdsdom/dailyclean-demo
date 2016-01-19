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