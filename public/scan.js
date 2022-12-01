const Template = document.querySelector('.template');

        // console.log(Template.innerText)

        const questionstemp = Handlebars.compile(`
                <li> {{team_name}}</li>
            
           <li> {{position}}</li>
           <li> {{jersey_number}}</li>`);

        const result = questionstemp({


            
        })

        const display = document.querySelector(".display");
        
        console.log(result);

        // More API functions here:
        // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image
        // the link to your model provided by Teachable Machine export panel
        const URL = "https://teachablemachine.withgoogle.com/models/WT52_-qY5/";
        document.addEventListener("DOMContentLoaded", init())

        let model, webcam, labelContainer, maxPredictions;

        let currentQuestion = 1;


        // Load the image model and setup the webcam
        async function init() {
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";

            // load the model and metadata
            // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
            // or files from your local hard drive
            // Note: the pose library adds "tmImage" object to your window (window.tmImage)
            model = await tmImage.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();


            showQuestion();

            setTimeout(() => {
                countdown()
            }, "5000")
            // Convenience function to setup a webcam
            var flip = true; // whether to flip the webcam
            webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
            await webcam.setup(); // request access to the webcam
            await webcam.play();
            window.requestAnimationFrame(loop);

            // append elements to the DOM
            document.getElementById("webcam-container").appendChild(webcam.canvas);
            labelContainer = document.getElementById("label-container");
            for (let i = 0; i < maxPredictions; i++) { // and class labels
                labelContainer.appendChild(document.createElement("div"));
            }
        }
        var timeLeft = 10;
        var elem = document.getElementById('some_div');

        var timerId = setInterval(countdown, 1000);
        const questions = document.querySelector('.display');

        function showQuestion() {
            // if the question id is
            console.log(currentQuestion);
            // call the api to get the next question
            axios.get(`/api/scan?question_id=${currentQuestion}`)
        
                .then(function (result) {
                    const response = result.data;

                    // show the next question
                    
                    console.log(response);

                    let html = questionstemp(response);

                    display.innerHTML = html;

                    // console.log(response);

                    // store the new answer 
                    elem.innerHTML = ''
                    timeLeft = 10
                 
                    timerId = setInterval(countdown, 1000);

                })
            }

        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                document.getElementById("data").innerHTML = ""
                //                location.reload();
                // doSomething();

                if (currentQuestion <= 5) {
                    currentQuestion++;
                } else {
                    console.log("GAME OVER!!!");
                    return ""
                }

                showQuestion()

            } else {
                elem.innerHTML = timeLeft + ' seconds remaining';
                timeLeft--;
            }
        }

        async function loop() {
            webcam.update(); // update the webcam frame
            await predict();
            window.requestAnimationFrame(loop);
        }

        var elem1 = document.getElementById('answer');
        var elem2 = document.getElementById('wronganswer');
        // run the webcam image through the image model
        async function predict() {

            // predict can take in an image, video or canvas html element
            const prediction = await model.predict(webcam.canvas);

            const salah = prediction[0]
            const haaland = prediction[1]
            const ronaldo = prediction[2]
            const onana = prediction[3]
            const jonny = prediction[4]
            // const none = prediction[5]
            setTimeout(() => {
                // console.log("Delayed for 1 second.");
            }, "1000")
            for (let i = 0; i < maxPredictions; i++) {
                // console.log(prediction[i].className === "salah")
                const classPrediction =
                    prediction[i].className + ": " + prediction[i].probability.toFixed(2);
                labelContainer.childNodes[i].innerHTML = classPrediction;
            }

            // if (salah.probability > 0.85) {
            //     elem1.innerHTML = "Well done the player is Salah "
            // }
            // if (haaland.probability > 0.85) {
            //     elem1.innerHTML = "Well done the player is Haaland "
            // }
            // if (ronaldo.probability > 0.85) {
            //     elem1.innerHTML = "Well done the player is ronalo "
            // }
            // if (onana.probability > 0.85) {
            //     elem1.innerHTML = "Well done the player is Mohamad Salah "
            // }
            // if (jonny.probability > 0.85) {
            //     elem1.innerHTML = "Well done the player is Mohamad Salah"
            // }




        }