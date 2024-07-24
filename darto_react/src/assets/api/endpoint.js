export const endpoint = {
    //BASE_URL_STAGING: "http://localhost:5000/",
    //BASE_URL_STAGING: "http://192.168.0.80:5000/",
    // BASE_URL_STAGING: "http://31.220.52.245:5000/",
    //BASE_URL_STAGING: "https://darto.in:9000/",
    BASE_URL_STAGING: "https://api.darto.in/",
    // Authentication / Authorization
    SIGN_IN: "",
    FORGOT_PASSWORD: "",
    GET_OTP: "",
    USER_DETAIL: "",
    REFRESH_TOKEN: "",

    // Customer Module
    HOMEPAGE: "/api/v1/darto/v1/home",
    TOURNAMENT: "darto/v1/tournament",
    PROFILE: "darto/v1/profile",
    GALLERY: "darto/v1/gallery",
    USER: "darto/v1/user",
    AGELIMIT: "darto/v1/limit", // check this
    CREATE_USERPROFILE: "api/v1/user/profile/create",
    GET_USERPROFILE: "api/v1/user/profile/get",
    GET_USERPROFILEBYID: "api/v1/user/profile/get/",
    UPDATE_USERPROFILE: "api/v1/user/profile/update/",
    DELETE_USERPROFILE: "api/v1/user/profile/delete/",
    TOURNAMENT_CREATETOURNAMENT: "api/v1/tournament/create",
    TOURNAMENT_GETTOURNAMENT: "api/v1/tournament/get",
    TOURNAMENT_GETTOURNAMENTState: "api/v1/tournament/get/state",
    TOURNAMENT_GETTOURNAMENTBYID: "api/v1/tournament/get/",
    TORNAMENT_UPDATETOURNAMENTBYID: "api/v1/tournament/update/",
    TOURNAMENT_DELETETOURNAMENTBYID: "api/v1/tournament/delete/",
    //Overview
    TOURNAMENT_CREATETOURNAMENTOVERVIEW: "api/v1/tournament/overview/create",
    TOURNAMENT_GETTOURNAMENTOVERVIEW: "api/v1/tournament/overview/get",
    TOURNAMENT_GETTOURNAMENTOVERVIEWBYID: "api/v1/tournament/overview/get/",
    TOURNAMENT_UPDATETOURNAMENTOVERVIEW: "api/v1/tournament/overview/update/",
    TOURNAMENT_DELETETOURNAMENTOVERVIEW: "api/v1/tournament/overview/delete/",
    //Slider
    Slider_CREATE: "api/v1/slider/create",
    Slider_GET: "api/v1/slider/get",
    Slider_GETBYID: "api/v1/slider/get/",
    Slider_UPDATE: "api/v1/slider/update/",
    Slider_DELETE: "api/v1/slider/delete/",
    //Particiate
    CREATE_PARTICIPATE: "api/v1/user/participate/create",
    GETALL_PARTICIPATE: "api/v1/user/participate/get",
    //DartoProfile
    CREATE_DARTOPROFILE: "api/v1/darto/profile/create",
    GET_DARTOPROFILE: "api/v1/darto/profile/get",
    GETBYID_DARTOPROFILE: "api/v1/darto/profile/get/",
    UPDATE_DARTOPROFILE: "api/v1/darto/profile/update/",
    DELETE_DARTOPROFILE: "api/v1/darto/profile/delete/",
    // DaroArena
    CREATE_DARTOARENA: "api/v1/darto/arena/create",
    GET_DARTOARENA: "api/v1/darto/arena/get",
    GETBYID_DARTOARENA: "api/v1/darto/arena/get/",
    UPDATE_DARTOARENA: "api/v1/darto/arena/update/",
    DELETE_DARTOARENA: "api/v1/darto/arena/delete/",
    //event Gallery
    CREATE_EVENTGALLERY: "api/v1/event/gallery/create",
    GET_EVENTGALLERY: "api/v1/event/gallery/get",
    GETBYID_EVENTGALLERY: "api/v1/event/gallery/get/",
    UPDATE_EVENTGALLERY: "api/v1/event/gallery/update/",
    DELETE_EVENTGALLERY: "api/v1/event/gallery/delete/",
    //homePage
    CREATE_HOMEPAGE: "api/v1/home/create",
    GET_HOMEPAGE: "api/v1/home/get",
    GETBYID_HOMEPAGE: "api/v1/home/get/",
    UPDATE_HOMEPAGE: "api/v1/home/update/",
    DELETE_HOMEPAGE: "api/v1/home/delete/",
    //center
    CREATE_CENTERS: "api/v1/center/create",
    GET_CENTERS: "api/v1/center/get",
    GETBYID_CENTERS: "api/v1/center/get/",
    UPDATE_CENTERS: "api/v1/center/update/",
    DELETE_CENTERS: "api/v1/center/delete/",
    //Team_user
    CREATE_TEAMS: "api/v1/user/team/create",
    GET_TEAMS: "api/v1/user/team/get",
    GETBYID_TEAM: "api/v1/user/team/get/",
    GETBYUSERID_TEAM: "api/v1/user/team/get/userid/",
    UPDATE_TEAM: "api/v1/user/team/update/",
    DELETE_TEAM: "api/v1/user/team/delete/",
    //Search
    STATE_CREATE: "api/v1/state/create",
    STATE_GETALL: "api/v1/state/get",
    STATE_LISTALL: "api/v1/state/get/list",

    // admin
    CREATE_Admin_TEAMS: "api/v1/admin/team/create",
    GET_Admin_TEAMS: "api/v1/admin/team/get",
    GETBYID_Admin_TEAM: "api/v1/admin/team/get/",
    UPDATE_Admin_TEAM: "api/v1/admin/team/update/",
    DELETE_Admin_TEAM: "api/v1/admin/team/delete/",
    //
    CREATE_EXCHANGE: "api/v1/exchange/create",
    //admin
    SIGIN_ADMIN: "api/v1/admin/user/signin",
    SIGNUP_ADMIN: "api/v1/admin/user/signup",
    UPDATE_ADMIN: "api/v1/admin/user/update/",
    GET_ADMIN: "api/v1/admin/user/get",
    GETBYID_ADMIN: "api/v1/admin/user/get/",
    DELETE_ADMIN: "api/v1/admin/user/delete/",
    //TeamMatch
    TEAMMATCH_CREATE: "api/v1/team/match/create",
    TEAMMATCH_GET: "api/v1/team/match/get",
    TEAMMATCH_GETBYID: "api/v1/team/match/get/",
    TEAMMATCH_UPDATEBYID: "api/v1/team/match/update/",
    TEAMMATCH_DELETEBYID: "api/v1/team/match/delete/",
    //matchscore
    MATCHSCORE_CREATE: "api/v1/team/score/create",
    MATCHSCORE_GET: "api/v1/team/score/get",
    MATCHSCORE_GETBYID: "api/v1/team/score/get/",
    MATCHSCORE_UPDATEBYID: "api/v1/team/score/update/",
    MATCHSCORE_DELETEBYID: "api/v1/team/score/delete/",
    //scoredetail s1,s2,s3
    SCOREDETAILS_CREATE: "api/v1/scoreDetails/create",
    SCOREDETAILS_GET: "api/v1/scoreDetails/get",
    SCOREDETAILS_GETBYID: "api/v1/scoreDetails/get/",
    SCOREDETAILS_UPDATEBYID: "api/v1/scoreDetails/update/",
    SCOREDETAILS_DELETEBYID: "api/v1/scoreDetails/delete/",

    //score
    MATCH_CREATE: "api/v1/team/match/updateScore",
    MATCHLIST: "api/v1/team/match/match/List",
    MATCHBYID: "api/v1/team/match/match/Details/",
    //tournament admin
    TOURNAMENT_CREATETOURNAMENTADMIN: "api/v1/admin/tournament/create",
    TOURNAMENT_GETTOURNAMENTADMIN: "api/v1/admin/tournament/get",
    TOURNAMENT_GETTOURNAMENTADMINBYID: "api/v1/admin/tournament/get/",
    TORNAMENT_UPDATETOURNAMENTADMINBYID: "api/v1/admin/tournament/update/",
    TOURNAMENT_DELETETOURNAMENTADMINBYID: "api/v1/admin/tournament/delete/",

    //club
    CREATE_CLUB: "api/v1/admin/club/create",
    GET_CLUB: "api/v1/admin/club/get",
    GETBYID_CLUB: "api/v1/admin/club/get/",
    UPDATE_CLUB: "api/v1/admin/club/update/",
    DELETE_ADMIN_CLUB: "api/v1/admin/club/delete/",
    //
    FILE_UPLOAD: "api/v1/uploadPhoto",
    //club
    CREATE_User_CLUB: "api/v1/user/club/create",
    GET_User_CLUB: "api/v1/user/club/get",
    GET_User_CLUB_STATE: "api/v1/user/club/get/state",
    GETBYID_User_CLUB: "api/v1/user/club/get/",
    GETBYUSERID_User_CLUB: "api/v1/user/club/get/userid/",
    UPDATE_User_CLUB: "api/v1/user/club/update/",
    DELETE_User_CLUB: "api/v1/user/club/delete/",
    // State
    CREATE_STATE: "api/v1/state/create",
    CREATE_STATELIST: "api/v1/state/create/stateList",
    CREATE_COUNTRYLIST: "api/v1/Country/create",
    GET_COUNTRY: "api/v1/Country/get",
    CREATE_PINOCODE: "api/v1/state/create/pincode",
    CREATE_CITY: "api/v1/state/create/city",
    CREATE_DISTRICT: "api/v1/state/create/district",
    GET_STATE: "api/v1/state/get",
    GET_STATEBYCOUNTRY: "api/v1/state/get/Countrybysearchstate",
    GET_DISTRICT: "api/v1/state/get/list",
    GET_TEAMANDCLUB: "api/v1/state/get/teamAndClub",
    GET_TOURMANENT: "api/v1/state/get/findbycategory",
    GET_STATELIST: "api/v1/state/get/list",
    GET_SEARCH_BOARD: "api/v1/state/get/boardList",
    GETBYID_STATE: "api/v1/state/get/",
    UPDATE_STATE: "api/v1/state/update/",
    DELETE_STATE: "api/v1/state/delete/",
    //StateList

    //CENTER
    CREATE_ADMIN_CENTER: "api/v1/admin/centers/create",
    GETADMIN_CENTER: "api/v1/admin/centers/get",
    GETBYID_ADMIN_CENTER: "api/v1/admin/centers/get/",
    UPDATE_ADMIN_CENTER: "api/v1/admin/centers/update/",
    DELETE_ADMIN_CENTER: "api/v1/admin/centers/delete/",

    //AgeGroup
    CREATE_USER_AGE: "api/v1/user/agegroup/create",
    GET_USER_AGE: "api/v1/user/agegroup/get",
    GETBYID_AGEGROUP: "api/v1/user/agegroup/get/",
    UPDATE_AGEGROUP: "api/v1/user/agegroup/update/",
    DELETE_AGEGROUP: "api/v1/user/agegroup/delete/",
    //Board
    CREATE_BOARD: "/api/v1/board/create",
    GET_BOARD: "/api/v1/board/get",
    GETBYID_BOARD: "/api/v1/board/get/",
    UPDATE_BOARD: "/api/v1/board/update/",
    DELETE_BOARD: "/api/v1/board/delete/",
    //Footer
    CREATE_FOOTER: "api/v1/footer/create",
    GET_FOOTER: "api/v1/footer/get",
    GET_FOOTER_CONTENT: "api/v1/footer/getcontent",
    GETBYID_FOOTER: "api/v1/footer/get/",
    UPDATE_FOOTER: "api/v1/footer/update/",
    DELETE_FOOTER: "api/v1/footer/delete/",
    UPLOAD_IMAGE: "api/v1/uploadPhoto",
    // ContactUs
    CREATE_CONTACTUS: "api/v1/contactUs/create",
    GET_CONTACTUS: "api/v1/contactUs/get",
    GETBYID_CONTACTUS: "api/v1/contactUs/get",

    //ExchangeDb
    CREATE_EXCHANGEDB: "api/v1/ExchangeDb",
    //create user
    SIGNUP_USER: "api/v1/users/signup",
    SIGNIN_USER: "api/v1/users/signin",
    GET_USER: "api/v1/users/get",
    GETBYID_USER: "api/v1/users/get/",
    CREATE_RESETPASSWORD: "api/v1/users/resetpassword",
    UPDATE_USER: "api/v1/users/update/",
    DELETE_USER: "api/v1/users/delete/",

    //auto
    GET_AUTO_SEARCH: "api/v1/state/get/search",

    //Partener

    CREATE_PARTENER: "api/v1/partner/create",
    GET_PARTENER: "api/v1/partner/get",
    GET_PARTENERBYID: "api/v1/partner/get/",
    UPDATE_PARTENER: "api/v1/partner/update/",
    DELETE_PARTENER: "api/v1/partner/delete/",

    //serarch player
    GET_PLAYER: "api/v1/users/get/getfindbyuser?query_string=",
    GET_PLAYERID: "api/v1/team/match/get/player?id=",
    GET_LATESTSCORE: "api/v1/team/match/get/latestScore/",
    UPDATE_SCORE: "api/v1/team/match/update/matchscore/",
    HISTORY_SCORE: "api/v1/team/match/get/HistoryScore/",
    GET_ACTIVEPLAYER: "api/v1/team/match/activePlayer?id=",
};
//http://localhost:5000/api/v1/users/get/getfindbyuser?query_string=Avi
// http://localhost:5000/api/v1/users/get/findbyuser?firstName=Avinash
// User / AgeGroup / CreateAgeGroup;
// User / AgeGroup / GetAgeGroup;
// User / AgeGroup / GetAgeGroupByid;
// User / AgeGroup / UpdateAgeGroupById/;
// User / AgeGroup / DeleteAgeGroup/;
