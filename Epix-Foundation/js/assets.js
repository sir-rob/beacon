$(document).ready(function () {  
  console.log("Ready");
  // 
  initialize();
  getStunt(63);

  function initialize(){

    // TABS WITH ONLY TWO
    $("div.tab").click(function(){
      if($(this).hasClass("active") == true) return;
      $("div.tab").toggleClass("active");
    });

    // TABS WITH MORE THAN TWO
    $("div.tab_sm, div.btn").click(function(){
      if($(this).hasClass("active") == true) return;
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
      // SECONDARY EFFECT
      $("#poster_container").css("left",-($(this).index()*710));
    });

  }

  function getStunt(id){
    //NEED TO MAKE YOUR OWN JSON OBJECT WITH 'ORDERING' TO MIMIC END PT
    var url = '/epx/device/web/movies/stunt/'+id;
    // var url = "stunt63.json";
    // console.log(url);
    //$.getJSON(url, function(data) {
      // console.log("success",data);
      $.each(stunt63, function(index, value) {
        // console.log("poster", index, value);
        if(index % 12 == 0) $("#poster_container").append("<div class='poster_page'></div>");
        $("div.poster_page:last-child").append("<div class='topMovie'><img src='http://posters.epixhd.com/"+value.movie_id+"/114x160.jpg'></div>")
      });
    //});
  }
});

var stunt63 = [
{
movie_id: 4770,
movie_title: "The Avengers",
movie_url: "/the-avengers/",
movie_playerposter: ""
},
{
movie_id: 13346,
movie_title: "Blue Summer",
movie_url: "/blue-summer/",
movie_playerposter: ""
},
{
movie_id: 4717,
movie_title: "Britney Spears: Femme Fatale Tour",
movie_url: "/britney-spears-femme-fatale-tour/",
movie_playerposter: ""
},
{
movie_id: 2099,
movie_title: "The Cabin In The Woods",
movie_url: "/the-cabin-in-the-woods/",
movie_playerposter: ""
},
{
movie_id: 2589,
movie_title: "Captain America: The First Avenger",
movie_url: "/captain-america-the-first-avenger/",
movie_playerposter: ""
},
{
movie_id: 5022,
movie_title: "Cirque Du Soleil: Worlds Away",
movie_url: "/cirque-du-soleil-worlds-away/",
movie_playerposter: ""
},
{
movie_id: 4680,
movie_title: "The Dictator",
movie_url: "/the-dictator/",
movie_playerposter: ""
},
{
movie_id: 4992,
movie_title: "Dredd",
movie_url: "/dredd/",
movie_playerposter: ""
},
{
movie_id: 13352,
movie_title: "The Ecstasies of Women",
movie_url: "/the-ecstasies-of-women/",
movie_playerposter: ""
},
{
movie_id: 4826,
movie_title: "The Expendables 2",
movie_url: "/the-expendables-2/",
movie_playerposter: ""
},
{
movie_id: 4986,
movie_title: "Flight",
movie_url: "/flight/",
movie_playerposter: ""
},
{
movie_id: 5021,
movie_title: "Fun Size",
movie_url: "/fun-size/",
movie_playerposter: ""
},
{
movie_id: 4651,
movie_title: "A Good Old Fashioned Orgy",
movie_url: "/a-good-old-fashioned-orgy/",
movie_playerposter: ""
},
{
movie_id: 5115,
movie_title: "The Guilt Trip",
movie_url: "/the-guilt-trip/",
movie_playerposter: ""
},
{
movie_id: 13340,
movie_title: "The Haunting in Connecticut 2: Ghosts of Georgia",
movie_url: "/the-haunting-in-connecticut-2-ghosts-of-georgia/",
movie_playerposter: ""
},
{
movie_id: 4683,
movie_title: "The Hunger Games",
movie_url: "/the-hunger-games/",
movie_playerposter: ""
},
{
movie_id: 13174,
movie_title: "Jim Breuer: And Laughter For All",
movie_url: "/jim-breuer-and-laughter-for-all/",
movie_playerposter: ""
},
{
movie_id: 13329,
movie_title: "Jim Norton: American Degenerate",
movie_url: "/jim-norton-american-degenerate/",
movie_playerposter: ""
},
{
movie_id: 4918,
movie_title: "LOL",
movie_url: "/lol/",
movie_playerposter: ""
},
{
movie_id: 13249,
movie_title: "Madonna: The MDNA Tour",
movie_url: "/madonna-the-mdna-tour/",
movie_playerposter: ""
},
{
movie_id: 4687,
movie_title: "Mission: Impossible Ghost Protocol",
movie_url: "/mission-impossible-ghost-protocol/",
movie_playerposter: ""
},
{
movie_id: 5047,
movie_title: "Paranormal Activity 4",
movie_url: "/paranormal-activity-4/",
movie_playerposter: ""
},
{
movie_id: 2199,
movie_title: "Prison Girls",
movie_url: "/prison-girls/",
movie_playerposter: ""
},
{
movie_id: 644,
movie_title: "Red Dawn",
movie_url: "/red-dawn-2012/",
movie_playerposter: ""
},
{
movie_id: 13385,
movie_title: "Requiem for a Dream",
movie_url: "/requiem-for-a-dream/",
movie_playerposter: ""
},
{
movie_id: 4759,
movie_title: "Safe",
movie_url: "/safe/",
movie_playerposter: ""
},
{
movie_id: 4908,
movie_title: "Skyfall",
movie_url: "/skyfall/",
movie_playerposter: ""
},
{
movie_id: 5103,
movie_title: "Texas Chainsaw",
movie_url: "/texas-chainsaw/",
movie_playerposter: ""
},
{
movie_id: 2188,
movie_title: "Thor",
movie_url: "/thor/",
movie_playerposter: ""
},
{
movie_id: 13169,
movie_title: "Tom Papa: Freaked Out",
movie_url: "/tom-papa-freaked-out/",
movie_playerposter: ""
},
{
movie_id: 4584,
movie_title: "Transformers: Dark of the Moon",
movie_url: "/transformers-dark-of-the-moon/",
movie_playerposter: ""
},
{
movie_id: 13330,
movie_title: "TWA Flight 800",
movie_url: "/twa-flight-800/",
movie_playerposter: ""
},
{
movie_id: 4695,
movie_title: "Tyler Perry's Good Deeds",
movie_url: "/tyler-perrys-good-deeds/",
movie_playerposter: ""
},
{
movie_id: 4946,
movie_title: "Tyler Perry's Madea's Witness Protection",
movie_url: "/tyler-perrys-madeas-witness-protection/",
movie_playerposter: ""
},
{
movie_id: 1657,
movie_title: "Warrior",
movie_url: "/warrior/",
movie_playerposter: ""
},
{
movie_id: 4824,
movie_title: "What to Expect When You're Expecting",
movie_url: "/what-to-expect-when-youre-expecting/",
movie_playerposter: ""
}
];