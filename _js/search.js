$(document).ready(function(){
            $('#searchBtn').click(function(){
                var Keywords = $('.store-search').val();
                console.log(Keywords);
                var init_store = function() {
                    var all_store = [
                        
                        //brunch 
                        {
                            href: "./sort/brunch/brown.html",
                            img: "../_images/img/a/brunch/brown/enviroment_in.jpg",
                            store: "布朗-趣胡桃鉗先生",
                            phone: "電話: 03 461 0289",
                            address: "地址: 桃園市中壢區成章二街534號"
                        },
                        {
                            href: "./sort/brunch/cocobear.html",
                            img: "../_images/img/a/brunch/cocobear/enviroment_out.jpg",
                            store: "可可熊",
                            phone: "電話: 03 463 1988",
                            address: "地址: 桃園市中壢區榮民路165巷60號"
                        },
                        {
                            href: "./sort/brunch/mirus_house.html",
                            img: "../_images/img/a/brunch/Miru's_house/enviroment_in.jpg",
                            store: "Miru's house",
                            phone: "電話: 03 455 2918",
                            address: "地址: 桃園市中壢區榮安一街336號"
                        },
                        {
                            href: "./sort/brunch/mummum.html",
                            img: "../_images/img/a/brunch/mummum/enviroment_out.jpg",
                            store: "mummum滿滿",
                            phone: "電話: 03 462 3775",
                            address: "地址: 桃園市中壢區興仁路二段73號"
                        },
                        {
                            href: "./sort/brunch/jennie_talks.html",
                            img: "../_images/img/a/brunch/jenny_two/enviroment_out.jpg",
                            store: "傑尼兔",
                            phone: "電話: 03 285 3330",
                            address: "地址: 桃園市中壢區興安一街12號"
                        },
                        {
                            href: "./sort/brunch/qq.html",
                            img: "../_images/img/a/brunch/QQ/enviroment_out.jpg",
                            store: "QQ蛋餅",
                            phone: "電話: 0909 316 444",
                            address: "地址: 桃園市中壢區興安二街19號"
                        },

                        // 沒有href
                        {
                            href: "./sort/brunch/",
                            img: "../_images/img/a/brunch/babeido/enviroment_outside.jpg",
                            store: "巴貝多",
                            phone: "電話: 03 455 1003",
                            address: "地址: 桃園市中壢區興仁路二段75號"
                        },
                        {
                            href: "./sort/brunch/",
                            img: "../_images/img/a/brunch/ham_dus/enviroment_outside.jpg",
                            store: "漢堡大師",
                            phone: "電話: 03 285 3666",
                            address: "地址: 桃園市中壢區興仁路二段67巷36號"
                        },
                        {
                            href: "./sort/brunch/",
                            img: "../_images/img/a/brunch/laya/enviroment_outside.jpg",
                            store: "拉亞漢堡",
                            phone: "電話: 03 462 7243",
                            address: "地址: 桃園市中壢區莊敬路38-1號"
                        },
                        {
                            href: "./sort/brunch/",
                            img: "../_images/img/a/brunch/laymi/enviroment_outside.jpg",
                            store: "蕾米(米可)活力早餐",
                            phone: "電話: 03 435 7338",
                            address: "地址: 桃園市中壢區興仁路二段67巷79弄6號"
                        },
                        //brunch no href end
                        
                        //coffee_tea
                        //no href
                        {
                            href: "./sort/coffee_tea/",
                            img: "../_images/img/a/coffee_tea/chain_soul/enviroment_outside.webp",
                            store: "Chain Soul 牽手咖啡",
                            phone: "電話: 03 463 8655",
                            address: "地址: 桃園市中壢區忠孝路509號"
                        },
                        {
                            href: "./sort/coffee_tea/charming.html",
                            img: "../_images/img/a/coffee_tea/Charming/enviroment_out.jpg",
                            store: "Charming蜜糖吐司。咖啡。異國料理",
                            phone: "電話: 03 452 2000",
                            address: "地址: 桃園市中壢區興仁路一段56號"
                        },
                        //no href
                        {
                            href: "./coffee_tea/",
                            img: "../_images/img/a/coffee_tea/ching_doll/enviroment_outside.jpg",
                            store: "晴娃娃輕食咖啡早午餐",
                            phone: "電話: 03 461 6887",
                            address: "地址: 桃園市中壢區復華街218號"
                        },
                        //no href
                        {
                            href: "./sort/coffee_tea/",
                            img: "../_images/img/a/coffee_tea/food_man/enviroment_outside.jpg",
                            store: "Foodman 豐滿三明治",
                            phone: "電話: 03 462 7880",
                            address: "地址: 桃園市中壢區榮民路41號"
                        },
                        //no href
                        {
                            href: "./sort/coffee_tea/",
                            img: "../_images/img/a/coffee_tea/intro_cafe/enviroment_outside.jpg",
                            store: "著手咖啡 Coffee Intro in Taoyuan",
                            phone: "電話: 03 433 1630",
                            address: "地址: 桃園市中壢區成功路135號"
                        },
                        //no href
                        {
                            href: "./sort/coffee_tea/",
                            img: "../_images/img/a/coffee_tea/jazz_cafe/enviroment_outside.jpg",
                            store: "JAZZ CAFE爵咖啡",
                            phone: "電話: 03 451 0700",
                            address: "地址: 桃園市中壢區興仁路二段67巷77號"
                        },
                        //  no href
                        {
                            href: "./sort/coffee_tea/",
                            img: "../_images/img/a/coffee_tea/mofe/enviroment_outside.jpg",
                            store: "墨非咖啡Mofe Cafe",
                            phone: "電話: 03 435 8367",
                            address: "地址: 桃園市中壢區成章四街94號"
                        },
                        {
                            href: "./sort/coffee_tea/persu.html",
                            img: "../_images/img/a/coffee_tea/persu_coffee/enviroment_out.jpg",
                            store: "破舍咖啡",
                            phone: "電話: 03 451 9753",
                            address: "地址: 桃園市中壢區興仁路一段168號"
                        },
                        {
                            href: "./sort/coffee_tea/tasting_table.html",
                            img: "../_images/img/a/coffee_tea/tasting_table/enviroment_out.jpg",
                            store: "玩味餐桌tasting table",
                            phone: "電話: 03 463 1061",
                            address: "地址: 桃園市中壢區復華街276號"
                        },
                        {
                            href: "./sort/coffee_tea/town_house.html",
                            img: "../_images/img/a/coffee_tea/Town_House/enviroment_out.jpg",
                            store: "街區商號Town House",
                            phone: "電話: 03 433 1203",
                            address: "地址: 桃園市中壢區榮民路165巷36號"
                        },
                        {
                            href: "./sort/coffee_tea",
                            img: "../_images/img/a/coffee_tea/xin_k_coffee/enviroment_in.jpg",
                            store: "心空咖啡",
                            phone: "電話: 03 453 5474",
                            address: "地址: 桃園市中壢區文化路130巷27號"
                        },
                        //coffee_tea end
                        
                        //drink
                        {
                            href: "./sort/drink/bingo.html",
                            img: "../_images/img/a/drink/bingo/logo.jfif",
                            store: "冰果Bingo",
                            phone: "電話: 03 463 2260",
                            address: "地址: 桃園市中壢區興仁路二段120號"
                        },
                        //no href
                        {
                            href: "./sort/drink/",
                            img: "../_images/img/a/drink/da_yuan_z/enviroment_out.jpg",
                            store: "大苑子",
                            phone: "電話: 03 462 3833",
                            address: "地址: 桃園市中壢區忠孝路44號"
                        },
                        {
                            href: "./sort/drink/fruit_idea.html",
                            img: "../_images/img/a/drink/fruit_idea/enviroment.jpg",
                            store: "菓點子",
                            phone: "電話: 03 451 6156",
                            address: "地址: 桃園市中壢區興仁路二段83號"
                        },
                        //no href
                        {
                            href: "./sort/drink/",
                            img: "../_images/img/a/drink/ice_hot/enviroment_in2.jpg",
                            store: "ICE&HOT艾思哈特果茶小站",
                            phone: "電話: 03 451 8961",
                            address: "地址: 桃園市中壢區榮民路165巷4號"
                        },
                        //no href
                        {
                            href: "./sort/drink/",
                            img: "../_images/img/a/drink/ponline/enviroment_out.jpgg",
                            store: "蓬萊仙島",
                            phone: "電話: 03 435 0091",
                            address: "地址: 桃園市中壢區興仁路二段67巷79弄10號"
                        },
                        //no href
                        {
                            href: "./sort/drink/",
                            img: "../_images/img/a/drink/tea_four/enviroment_out.jpg",
                            store: "茶四方",
                            phone: "電話: 03 452 6827",
                            address: "地址: 桃園市中壢區莊敬路836號"
                        },
                        {
                            href: "./sort/drink/teas_origin.html",
                            img: "../_images/img/a/drink/teas_origin/enviroment_out.jfif",
                            store: "Tea's原味",
                            phone: "電話: 03 463 4226",
                            address: "地址: 桃園市中壢區興仁路二段106號"
                        },
                        //no href
                        {
                            href: "./sort/drink",
                            img: "../_images/img/a/drink/tuang_culture/enviroment_out.jpg",
                            store: "堂文化茶飲專賣店",
                            phone: "電話: 03 463 1279",
                            address: "地址: 桃園市中壢區成章一街117號"
                        },
                        {
                            href: "./sort/drink/your_juice.html",
                            img: "../_images/img/a/drink/your_juice/enviroment_out.jpg",
                            store: "你的果汁",
                            phone: "電話: 0988 104 688",
                            address: "地址: 桃園市中壢區興仁路二段67巷22號1樓"
                        },
                        //drink end 
                        
                        //foreign
                        //no href
                        {
                            href: "./sort/foreign/",
                            img: "../_images/img/a/foreign/ag_spoon/enviroment_out.jpg",
                            store: "銀湯匙",
                            phone: "電話: 03 437 5688",
                            address: "地址: 桃園市中壢區實踐路219號"
                        },
                        //no href
                        {
                            href: "./sort/foreign/",
                            img: "../_images/img/a/foreign/curry_john/enviroment_out.jpg",
                            store: "咖哩John",
                            phone: "電話: 03 285 3221",
                            address: "地址: 桃園市中壢區興仁路二段67巷16號"
                        },
                        //no href
                        {
                            href: "./sort/foreign/",
                            img: "../_images/img/a/foreign/food_machine/enviroment_out.jpg",
                            store: "食。光機",
                            phone: "電話: 03 463 5859",
                            address: "地址: 桃園市中壢區莊敬路811巷1號"
                        },
                        //no href
                        {
                            href: "./sort/foreign/",
                            img: "../_images/img/a/foreign/left_an/enviroment_out.jpg",
                            store: "左岸意廚風味坊",
                            phone: "電話: 03 461 0979",
                            address: "地址: 桃園市中壢區榮安十三街310號"
                        },
                        {
                            href: "./sort/foreign/lemon.html",
                            img: "../_images/img/a/foreign/lemon/enviroment_out2.jpg",
                            store: "檸檬草泰式小館",
                            phone: "電話: 03 433 1061",
                            address: "地址: 桃園市中壢區元生三街182號"
                        },
                        {
                            href: "./sort/foreign/moonxiang.html",
                            img: "../_images/img/a/foreign/moonxiang/enviroment_out.jpg",
                            store: "月香小館",
                            phone: "電話: 03 461 6798",
                            address: "地址: 桃園市中壢區榮民路149號"
                        },
                        {
                            href: "./sort/foreign/mooti.html",
                            img: "../_images/img/a/foreign/mooti/enviroment_out.jpg",
                            store: "慕堤意廚",
                            phone: "電話: 03 462 6858",
                            address: "地址: 桃園市中壢區興仁路一段202號"
                        },
                        {
                            href: "./sort/foreign/pasta_good_good.html",
                            img: "../_images/img/a/foreign/Pasta_GoodGood/enviroment_out.jpg",
                            store: "Pasta Good Good",
                            phone: "電話: 03 451 4778",
                            address: "地址: 桃園市中壢區興仁路二段134號"
                        },
                        {
                            href: "./sort/foreign/pin_pizza_bar.html",
                            img: "../_images/img/a/foreign/Pin_Pizza_Bar/enviroment_out.jpg",
                            store: "Pin Pizza Bar 品手感披薩",
                            phone: "電話: 03 463 2286",
                            address: "地址: 桃園市中壢區陸光二街3號1樓"
                        },
                        //no href
                        {
                            href: "./sort/foreign/",
                            img: "../_images/img/a/foreign/tailand_tradition/enviroment_out.jpg",
                            store: "泰棧泰國傳統小吃",
                            phone: "電話: 03 455 9799",
                            address: "地址: 桃園市中壢區榮民路36號"
                        },
                        //foreigh end
                        
                        //hotpot
                        {
                            href: "./sort/hotpot/sanma.html",
                            img: "../_images/img/a/hotpot/1_Sanma/enviroment_out.jpg",
                            store: "三媽臭臭鍋",
                            phone: "電話: 03 285 0089",
                            address: "地址: 桃園市中壢區興仁路二段89號"
                        },
                        {
                            href: "./sort/hotpot/emootien.html",
                            img: "../_images/img/a/hotpot/2_emutien/enviroment_out.jpg",
                            store: "一畝田酸菜白肉鍋/拉麵/水餃",
                            phone: "電話: 03 462 9781",
                            address: "地址: 桃園市中壢區忠孝路186號"
                        },
                        {
                            href: "./sort/hotpot/change_hotpot.html",
                            img: "../_images/img/a/hotpot/3_cheng_e_hotpot/enviroment_out.jpg",
                            store: "川一品鍋",
                            phone: "電話: 03 451 1800",
                            address: "地址: 桃園市中壢區莊敬路889號"
                        },
                        {
                            href: "./sort/hotpot/chiayi_stone_hotpot.html",
                            img: "../_images/img/a/hotpot/4_chiayi_hotpot/enviroment_out.jpg",
                            store: "嘉義老牌石頭火鍋",
                            phone: "電話: 03 461 2312",
                            address: "地址: 桃園市中壢區興仁路一段81號"
                        },
                        //no href
                        {
                            href: "./sort/hotpot/",
                            img: "../_images/img/a/hotpot/chen_doo/enviroment_out.jpg",
                            store: "錢都日式涮涮鍋",
                            phone: "電話: 03 463 0216",
                            address: "地址: 桃園市中壢區強國路55號"
                        },
                        //no href
                        {
                            href: "./sort/hotpot/",
                            img: "../_images/img/a/hotpot/chu_chian/enviroment_out.jpg",
                            store: "築間幸福鍋物",
                            phone: "電話: 03 462 6226",
                            address: "地址: 桃園市中壢區永福路988號"
                        },
                        //no href
                        {
                            href: "./sort/hotpot/",
                            img: ".../_images/img/a/hotpot/e_fan_di/enviroment_out.jpg",
                            store: "一番地",
                            phone: "電話: 03 425 2588",
                            address: "地址: 桃園市中壢區中美路二段130號"
                        },
                        //no href
                        {
                            href: "./sort/hotpot/",
                            img: "../_images/img/a/hotpot/eight_hp/enviroment_out.jpg",
                            store: "8鍋新穎時尚臭臭鍋",
                            phone: "電話: 03 466 3238",
                            address: "地址: 桃園市中壢區新中北路222號"
                        },
                        //no href
                        {
                            href: "./sort/hotpot/",
                            img: "../_images/img/a/hotpot/six_door/enviroment_out.jpg",
                            store: "六扇門時尚湯鍋",
                            phone: "電話: 03 456 8777",
                            address: "地址: 桃園市中壢區新中北路210號"
                        },
                        //no href
                        {
                            href: "./sort/hotpot/",
                            img: "../_images/img/a/hotpot/tuang_ba/enviroment_out.jpg",
                            store: "湯霸小火鍋",
                            phone: "電話: 03 455 1394",
                            address: "桃園市中壢區興仁路二段665號"
                        },
                        //hotpot end
                        
                        //snack_bar
                        {
                            href: "./sort/snack_bar/cat_bao.html",
                            img: "../_images/img/a/snack_bar/catbao/enviroment_out.jpg",
                            store: "貓寶涼麵",
                            phone: "電話: 03 435 9953",
                            address: "地址: 桃園市中壢區興仁路二段67巷18號"
                        },
                        //no href
                        {
                            href: "./sort/snack_bar/",
                            img: "../_images/img/a/snack_bar/g_orange/enviroment_out.jpg",
                            store: "橘色小館",
                            phone: "電話: 03 453 5485",
                            address: "地址: 桃園市中壢區興仁路二段77號"
                        },
                        {
                            href: "./sort/snack_bar/hao_z_wei.html",
                            img: "../_images/img/a/snack_bar/hao_z_wei/enviroment_out.jpg",
                            store: "好滋味麵館",
                            phone: "電話: 03 455 5622",
                            address: "桃園市中壢區福德路90-1號"
                        },
                        {
                            href: "./sort/snack_bar/hongkong_meat.html",
                            img: "../_images/img/a/snack_bar/hongkong_meat/enviroment_out.jpg",
                            store: "粵華燒臘快餐",
                            phone: "電話: 03 462 4686",
                            address: "地址: 桃桃園市中壢區興仁路二段67巷89號"
                        },
                        {
                            href: "./sort/snack_bar/liang_mom.html",
                            img: "../_images/img/a/snack_bar/liang_mom/enviroment_out.jpg",
                            store: "梁媽媽手工水餃",
                            phone: "電話: 0910 387 607",
                            address: "地址: 桃園市中壢區興安一街6號"
                        },
                        {
                            href: "./sort/snack_bar/lin_noodles.html",
                            img: "../_images/img/a/snack_bar/lin_noodle/enviroment_out.jpg",
                            store: "林記麵食館",
                            phone: "電話: 03 451 8185",
                            address: "地址: 桃園市中壢區莊敬路731號"
                        },
                        //no href
                        {
                            href: "./sort/snack_bar/",
                            img: "../_images/img/a/snack_bar/m_di_e_xiang/enviroment_out.jpg",
                            store: "一番地",
                            phone: "電話: 03 425 2588",
                            address: "地址: 桃園市中壢區中美路二段130號"
                        },
                        //no href
                        {
                            href: "./sort/hotpot/",
                            img: "../_images/img/a/hotpot/eight_hp/enviroment_out.jpg",
                            store: "第一香 焿の專賣店",
                            phone: "電話: 03 435 5573",
                            address: "桃園市中壢區興仁路二段79號"
                        },
                        {
                            href: "./sort/snack_bar/smile_fish.html",
                            img: "../_images/img/a/snack_bar/smile_fish/enviroment_out.jpg",
                            store: "微笑的魚",
                            phone: "電話: 0930 369 812",
                            address: "地址: 桃園市中壢區興安一街8巷6號"
                        },
                        //no href
                        {
                            href: "./sort/snack_bar/",
                            img: "../_images/img/a/snack_bar/wan_li_xiang/enviroment_out.jpg",
                            store: "萬里香",
                            phone: "電話: 0907 330 967",
                            address: "桃園市中壢區興安一街8巷3號"
                        },
                        //no href
                        {
                            href: "./sort/snack_bar/",
                            img: "../_images/img/a/snack_bar/xinjen_beef_noodles/enviroment_out.JPG",
                            store: "興仁牛肉麵",
                            phone: "電話: 03 463 1111",
                            address: "桃園市中壢區興仁路二段71號"
                        },
                        //snack_bar end
                    ];

                    for(var i=0; i< all_store.length; i++){
                        var $search_Store = $('<div class="sort_Store"><a class = "sortImg_href"><img class="sortImg" /></a><div class="sortImg_Text"> <div class="sortImg_store"><h3></h3></div><div class="sortImg_phone"></div><div class="sortImg_address"></div><br><div class="heart" style="cursor:  pointer"> ❤ </div></div>');

                        $search_Store.find('.sortImg_href').attr('href',all_store[i].href);
                        $search_Store.find('.sortImg').attr('src',all_store[i].img);
                        $search_Store.find('h3').text(all_store[i].store);
                        $search_Store.find('.sortImg_phone').text(all_store[i].phone);
                        $search_Store.find('.sortImg_address').text(all_store[i].address);

                        console.log($search_Store);

                        $('#sort').append($search_Store); 
                    }
                        var update_sort_Store = function(key){
                            var $all_search_Store =$('.sort_Store');
                            $all_search_Store.hide();

                        for(var i=0; i< all_store.length; i++) {
                            if(all_store[i].store.indexOf(key) != -1){
                                console.log(all_store[i].store);
                                $all_search_Store.eq(i).show();
                            }
                        }
                    }
                    update_sort_Store(Keywords);
                };
                init_store();
                
            });// search_btn_click
            
        });//$(document).ready(function()