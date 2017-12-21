import {MENU, RATING} from "../actions";

const initialState ={
    "time":"2017-12-21 07:00",
    "data":[
        {"restaurant":"학생회관 식당", "foods":[
                {"time":"breakfast", "name":"쇠고기미역국(#)", "price":"1000", "rating":3.5543478260869565, "numberOfRatings":46},
                {"time":"lunch", "name":"쇠고기브로콜리볶음(#)","price":"3000","rating":1.9193548387096775,"numberOfRatings":31},
                {"time":"lunch","name":"버섯스크램블에그","price":"1700","rating":3.5542168674698793,"numberOfRatings":83},
                {"time":"lunch","name":"돈까스김치치즈나베","price":"3000","rating":3.16044776119403,"numberOfRatings":134},
                {"time":"dinner","name":"갈비구이","price":"4000","rating":3.2604166666666665,"numberOfRatings":48},
                {"time":"dinner","name":"어묵탕(#)","price":"1000","rating":2.575,"numberOfRatings":20}]},
        {"restaurant":"농생대 3식당","foods":[
                {"time":"lunch","name":"새우된장찌개(#)","price":"3000","rating":2.75,"numberOfRatings":4},
                {"time":"lunch","name":"오리치미덮밥(#)","price":"4000","rating":3.625,"numberOfRatings":20},
                {"time":"lunch","name":"제육덮밥","price":"3000","rating":3.274193548387097,"numberOfRatings":31},
                {"time":"lunch","name":"해물짬뽕(#)","price":"3000","rating":3.2222222222222223,"numberOfRatings":9},
                {"time":"dinner","name":"동파육","price":"4000","rating":3.0217391304347827,"numberOfRatings":23},
                {"time":"dinner","name":"짬뽕밥(#)","price":"2500","rating":3,"numberOfRatings":3}]},
        {"restaurant":"919동 기숙사 식당","foods":[
                {"time":"breakfast","name":"청국장찌개(#)","price":"2500","rating":3.2222222222222223,"numberOfRatings":9},
                {"time":"lunch","name":"쇠고기쌀국수(#)","price":"3000","rating":4.25,"numberOfRatings":6},
                {"time":"lunch","name":"뼈없는닭갈비(#)","price":"3000","rating":4.357142857142857,"numberOfRatings":7},
                {"time":"dinner","name":"조갯살근대된장국&삼치조림(#)","price":"2500"},
                {"time":"dinner","name":"사천식제육강정","price":"3000","rating":3.6607142857142856,"numberOfRatings":28},
                {"time":"dinner","name":"팟타이(#)","price":"3000","rating":2.909090909090909,"numberOfRatings":11}]},
        {"restaurant":"자하연 식당","foods":[
                {"time":"lunch","name":"어묵매운탕(#)","price":"2500","rating":0.9285714285714286,"numberOfRatings":7},
                {"time":"lunch","name":"갈비스테이크","price":"4000","rating":3.125,"numberOfRatings":16},
                {"time":"dinner","name":"인삼닭죽(#)","price":"2500"},
                {"time":"dinner","name":"낙지주꾸미덮밥(#)","price":"3000","rating":3.5,"numberOfRatings":5}]},
        {"restaurant":"302동 식당","foods":[
                {"time":"lunch","name":"청국장찌개(#)","price":"2500"},
                {"time":"lunch","name":"제육쭈꾸미볶음","price":"3000"},
                {"time":"dinner","name":"순대국밥","price":"3000","rating":3.5,"numberOfRatings":8},
                {"time":"dinner","name":"쇠고기발사믹볶음밥(#)","price":"3000","rating":2.625,"numberOfRatings":4}]},
        {"restaurant":"솔밭 간이 식당","foods":[]},
        {"restaurant":"동원관 식당","foods":[
                {"time":"lunch","name":"버섯전골(#)","price":"2500","rating":3,"numberOfRatings":1},
                {"time":"lunch","name":"갈비구이","price":"4000","rating":2.763157894736842,"numberOfRatings":19},
                {"time":"dinner","name":"인삼곰탕(#)","price":"3000","rating":2.8333333333333335,"numberOfRatings":3},
                {"time":"dinner","name":"해물김치볶음밥&계란후라이(#)","price":"3000"}]},
        {"restaurant":"감골 식당","foods":[
                {"time":"lunch","name":"감자탕","price":"3000","rating":3.4285714285714284,"numberOfRatings":7},
                {"time":"lunch","name":"나시고랭(#)","price":"3000"},
                {"time":"lunch","name":"채식메뉴/현미팥밥,쌀밥,온소면\t/백김치,삼색콩불고기\t/가지찜,해초샐러드,야채튀김&칠리소스,생야채,키위드레싱,열무된장무침,모듬쌈(양배추,상추),식혜","price":"6000"},
                {"time":"dinner","name":"북어콩나물해장국(#)","price":"2500","rating":4,"numberOfRatings":1},
                {"time":"dinner","name":"너비아니구이","price":"4000","rating":3.2142857142857144,"numberOfRatings":14}]},
        {"restaurant":"사범대 4식당","foods":[
                {"time":"lunch","name":"뚝배기왕새우튀김알밥(#)/","price":"4000","rating":5,"numberOfRatings":1},
                {"time":"lunch","name":"돈불고기잡채밥&딸기잼데니쉬","price":"4000","rating":4,"numberOfRatings":2},
                {"time":"dinner","name":"불닭마요덮밥(#)&찰도그롤","price":"4000"}]},
        {"restaurant":"두레미담","foods":[
                {"time":"lunch","name":"왕만두부대찌개&등심탕수육//","price":"5500"},
                {"time":"lunch","name":"잡곡밥/어묵된장국/제육신김치두루치기/흰살생선까스/날치알계란말이/물미역초장무침","price":"6000"},
                {"time":"dinner","name":"즉석탄탄멘&스팸마요오니기리/","price":"5500"},
                {"time":"dinner","name":"잡곡밥/어묵된장국/양념파채돈까스/참치김치볶음/상하이볶음우동/물미역초장무침","price":"6000"}]},
        {"restaurant":"301동 식당","foods":[
                {"time":"lunch","name":"철판)오삼불고기","price":"5000","rating":3.4166666666666665,"numberOfRatings":6},
                {"time":"lunch","name":"뚝)날치알밥","price":"4000"},
                {"time":"lunch","name":"301마요덮밥","price":"3500","rating":2.659574468085105,"numberOfRatings":188},
                {"time":"lunch","name":"순살돈까스","price":"4000","rating":3.333333333333334,"numberOfRatings":9},
                {"time":"dinner","name":"수제소시지오므라이스","price":"4000"},
                {"time":"dinner","name":"301마요덮밥","price":"3500","rating":2.659574468085105,"numberOfRatings":188},
                {"time":"dinner","name":"고구마돈까스","price":"4000","rating":3.0588235294117645,"numberOfRatings":17}]},
        {"restaurant":"예술계복합연구동 식당","foods":[
                {"time":"lunch","name":"(철판)오돈불고기","price":"4500"},
                {"time":"lunch","name":"하와이안로코모코&/   또띠아피자","price":"5000"},
                {"time":"dinner","name":"잡채덮밥+꽃빵&/    왕교자만두튀김","price":"4000"}]},
        {"restaurant":"공대 간이 식당","foods":[
                {"time":"lunch","name":"자장면","price":"3000","rating":3.8010204081632653,"numberOfRatings":98},
                {"time":"lunch","name":"사천자장면","price":"3000","rating":3.1272727272727274,"numberOfRatings":55},
                {"time":"lunch","name":"삼선짬뽕","price":"3000","rating":4.335227272727274,"numberOfRatings":88},
                {"time":"lunch","name":"짬짜면","price":"4000","rating":4.071428571428573,"numberOfRatings":42},
                {"time":"lunch","name":"치킨탕수육","price":"7000","rating":4.126865671641791,"numberOfRatings":67},
                {"time":"lunch","name":"군만두","price":"3000","rating":4.828333333333331,"numberOfRatings":300},
                {"time":"lunch","name":"마파두부덮밥&요구르트","price":"3000","rating":3.375,"numberOfRatings":4}]},
        {"restaurant":"상아회관 식당","foods":[]},
        {"restaurant":"220동 식당","foods":[
                {"time":"lunch","name":"[뚝]부대찌개(&라면사리)","price":"4000"},
                {"time":"lunch","name":"고추잡채덮밥&꽃빵튀김","price":"3500"},
                {"time":"dinner","name":"[뚝]안동찜닭","price":"4000","rating":2,"numberOfRatings":1},
                {"time":"dinner","name":"미트소스스파게티","price":"3500","rating":4,"numberOfRatings":1}]},
        {"restaurant":"대학원 기숙사 식당","foods":[
                {"time":"breakfast","name":"건새우아욱국&스팸구이","price":"3000"},
                {"time":"breakfast","name":"토스트/씨리얼&우유","price":"2500","rating":3.656862745098039,"numberOfRatings":51},
                {"time":"lunch","name":"불고기두부전골","price":"4000","rating":3.0416666666666665,"numberOfRatings":12},
                {"time":"lunch","name":"중화잡채덮밥","price":"4000","rating":4.666666666666667,"numberOfRatings":3},
                {"time":"dinner","name":"짜글이찌개","price":"4000"}]},
        {"restaurant":"85동 수의대 식당","foods":[
                {"time":"lunch","name":"사골육개장","price":"Etc","rating":1,"numberOfRatings":9},
                {"time":"dinner","name":"닭고기카레","price":"Etc"}]}
    ]
}
export default function menu(state=initialState,action){
    switch(action.type){
        case MENU:
            return state;
        default:
            return state;
    }
}

function Deep(arr,index) {
        return(arr.map((data,i)=> {
            i == index ? data : null
        }))
}
export function rate(state=initialState,action){
    switch(action.type){
        case RATING:
            return{
                ...state,
                data: Deep(state.data,action.index)
            }

        default:
            return state
    }
}