// Import our custom CSS
import '../scss/styles.scss';

$(".item").click(function() {
    const imagePath = $(this).find(".item-image").attr("src");
    console.log("image path for modal =>", imagePath);
    $("#modal-image").attr("src", imagePath);
});

$('.card-body .link, .card-body .card-title').click(function(event) {
    // Prevent the default link action
    event.preventDefault();

    // Navigate up to the closest .card-body and then find the .card-title h6 to get its text
    const cardTitle = $(this).closest('.card-body').find('.card-title h6').text();

    // Log the card title
    console.log("All the latest from AEG => Blog title:", cardTitle);
});


