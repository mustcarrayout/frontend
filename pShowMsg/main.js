/**
 * Created by lihe on 2016/1/28.
 */

/**
 * 1. �����ڵ� ��ʼ����ʱ�򴴽������ֻ����һ��
 * 2. ˢ���ı� msg
 * 3. �ջ� antimate
 * 4. ��ʽ�ı� err suc
 * 5. ���¼�
 *
 * */

//;(function($, window, undefined){
//
//    var showMsg = function(el, opt){
//        this.$el = $(el);
//        this.el = el;
//        this.defaults = {
//            err: false,
//            warn: false,
//            info: false,
//            suc: true,
//            msg: ''
//        };
//        this.theme = {
//            "err" : "pur-err",
//            "info" : "pur-info",
//            "warn" : "pur-warn",
//            "suc": "pur-suc"
//        };
//        this.options = $.extend({}, this.defaults, opt);
//        console.log(this.options);
//        this.init = function(){
//            var that = this;
//            if(this.$el){
//                $(document.body).prepend("<div class=\"pur-top-msg\"></div>");
//            }
//            $.each(this.options,  function(k, v){
//                //console.log("k is " + k + ",v is " + v);
//                if(v) {
//                    $(".pur-top-msg").addClass(that.theme[(""+k)]).append("<span>" + that.options.msg+"</span>");
//                    return false;
//                }
//
//            });
//        };
//
//        this.init();
//    };
//
//    $.fn["pShowMsg"] = function(opt){
//        new showMsg(this, opt);
//        return this;
//    };
//
//})(jQuery, window);
//
//// Ĭ���ǳɹ���err: true,
//$(".pur-top-msg").pShowMsg({msg: "Tips Success!"});
//
//$(function(){
//    $("#btn_login").on("click", function(){
//        $(".pur-top-msg").stop(true, false)
//            .animate({height: 50}, 1000,"",function(){
//                var that = this;
//                setTimeout(function(){
//                    $(that).animate({height: 0}, 1000);
//                },1000);
//            })
//    });
//});

;(function($, window, undefined){
    var pMsg = function(el, opt){
        this.el = el;
        this.$el = $(el);
        this.defaults= {
            theme: {
                'err' : 'pur-err',
                'info' : 'pur-info',
                'warn' : 'pur-warn',
                'suc': 'pur-suc'
            }
        };
        this.init = function() {
            $(document.body).prepend('<div class="pur-top-msg"><span id="top_msg"></span></div>');
        }
        this.init();
    }

})(jQuery, window);
