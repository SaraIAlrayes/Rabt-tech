// Data
var longString = ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ';
longString = longString + ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ';
longString = longString + ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ';
longString = longString + ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ';
longString = longString + ' هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، ';

// Opportunities array
var opps = [{
    title: 'مصمم جرافيكي',
    category: 'تطوع',
    desc: longString,
    fields: 'إداري، فني',
    period: 'شهر',
    rewards: 'شهادة, ساعات تطوعية',
  },
  {
    title: 'محاسب',
    category: 'عمل مرن',
    desc: longString,
    fields: 'مالي، إداري',
    period: '3 أشهر',
    rewards: 'شهادة, ساعات تطوعية',
    wage: '2000',
  },
  {
    title: 'مسؤول جودة',
    category: 'تطوع',
    desc: longString,
    fields: 'إداري',
    rewards: 'شهادة, ساعات تطوعية',
    period: 'شهر',
  },
];

// individuals array
var indivs = [{
    name: 'خالد أحمد',
    img: 'resources/media/indiv-2.jpg',
    title: 'مصمم جرافيكي',
    rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>',
    profile: longString,
  },
  {
    name: 'محمد إبراهيم',
    img: 'resources/media/indiv-1.jpg',
    title: 'محاسب',
    rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>',
    profile: longString,
  },
  {
    name: 'مروان محمد',
    img: 'resources/media/indiv-3.jpg',
    title: 'مسؤول جودة',
    rating: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>',
    profile: longString,
  },
];

// display opportunities
var oppScript = "";
opps.forEach(function(opp) {
  oppScript = oppScript + '<div class="col-md-4 opp-col pb-4"> <div class="opp-container"> <h3>' + opp.title + '</h3> <p class="opp-category">' + opp.category;
  oppScript = oppScript + '</p> <p class="opp-desc">' + (opp.desc).substring(0, 50) + '...' + '</p> <p class="opp-field">' + opp.fields;
  oppScript = oppScript + '</p> <p class="opp-period">' + 'لمدة ' + opp.period + '</p>';
  if (typeof opp.wage != 'undefined') {
    oppScript = oppScript + '<p class="opp-wage">' + opp.wage + ' ريال ' + '</p>'
  }
  oppScript = oppScript + '<div class="text-center"> <a type="button" class="btn mt-4" href="opp.html">التفاصيل</a> </div> </div> </div>'
});
$(".opps-row").html(oppScript);

// display individuals
var indivaScript = "";
indivs.forEach(function(indiv) {
  indivaScript = indivaScript + '<div class="col-md-4 pb-4"> <div class="indiv-container"> <img src="' + indiv.img + '"> <div class="indiv-details-container"> <h3>' + indiv.name + '</h3>';
  indivaScript = indivaScript + '<p class="job-title">' + indiv.title + '</p> <p class="rating">' + indiv.rating + '</p> <p class="profile mb-3">' + (indiv.profile).substring(0, 50) + '...'  + '</p>';
  indivaScript = indivaScript + '<div class="text-center mb-3"> <a class="social pr-1 pl-1" href="#"><i class="fab fa-twitter"></i></a>';
  indivaScript = indivaScript + '<a class="social pr-1 pl-1" href="#"><i class="fab fa-facebook-f"></i></a>';
  indivaScript = indivaScript + '<a class="social pr-1 pl-1" href="#"><i class="fab fa-linkedin-in"></i></a> </div>';
  indivaScript = indivaScript + '<div class="text-center"> <a type="button" class="btn" href="/">اطلب خدمة</a></div></div></div></div>';
});
$(".indivs-row").html(indivaScript);


// Add opportunity (on form submission)
function addOpp() {

  // Get Data from the input fields
  var newOpp = {
    title: $('#title').val(),
    category: $('#category').val(),
    desc: $('#desc').val(),
    fields: $('#fields').val(),
    period: $('#period').val(),
  }

  if ($('#reward-c').val() || $('#reward-h').val()) {
    let rewards = "";
    let first = true;
    if ($('#reward-c').val()) {
      rewards = rewards + $('#reward-c').val();
    }
    if ($('#reward-h').val()) {
      if (first) {
        first = false;
        rewards = rewards + $('#reward-h').val();
      } else {
        rewards = rewards + ', ' + $('#reward-h').val();
      }
    }
    newOpp.rewards = rewards;
  }

  if ($('#wage').val()) {
    newOpp.wage = $('#wage').val();
  }

  // Push new opportunity to the array of opportunities
  opps.push(newOpp);

  // display the new array of opportunities
  var oppScript = "";
  opps.forEach(function(opp) {
    oppScript = oppScript + '<div class="col-md-4 opp-col pb-4"> <div class="opp-container"> <h3>' + opp.title + '</h3> <p class="opp-category">' + opp.category;
    oppScript = oppScript + '</p> <p class="opp-desc">' + (opp.desc).substring(0, 50) + '...' + '</p> <p class="opp-field">' + opp.fields;
    oppScript = oppScript + '</p> <p class="opp-period">' + 'لمدة ' + opp.period + '</p>';
    if (typeof opp.wage != 'undefined') {
      oppScript = oppScript + '<p class="opp-wage">' + opp.wage + ' ريال ' + '</p>'
    }
    oppScript = oppScript + '<div class="text-center"> <a type="button" class="btn" href="opp.html">التفاصيل</a> </div> </div> </div>'
  });
  $(".opps-row").html(oppScript);

  $('.message-container').slideDown();

  setTimeout(
    function() {
      $('.message-container').slideUp();
    }, 3000);
}


// Opportunity Page
$('.opp-page-header-details h1').append(opps[1].title);
$('.opp-page-desc-container').append(opps[1].desc);
$('.opp-page-details-container .category').append(opps[1].category);
$('.opp-page-details-container .fields').append(opps[1].fields);
$('.opp-page-details-container .period').append(opps[1].period);
$('.opp-page-details-container .rewards').append(opps[1].rewards);
if (opps[1].wage) {
  $('.opp-page-details-container .wage').append(opps[1].wage + ' ريال');

}
