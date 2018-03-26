$(document).ready(function () {

            // Audio Setup
            // ===========

            // audio element with JavaScript
            var audioElement = document.createElement("audio");

            // set source
            audioElement.setAttribute("src", "images/CocktailShakerSoundEffect.mp3");

            // Shaker Button
            $(".hvr-buzz").on("click", function () {
                    audioElement.play();
                }


            });