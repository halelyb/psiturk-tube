/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to
// they are not used in the stroop code but may be useful to you

// All pages to be loaded
var pages = [
	"instructions/instruct-1.html",
	"instructions/instruct-2.html",
	"instructions/instruct-3.html",
	"instructions/instruct-ready.html",
	"stage.html",
	"stage2.html",
	"preloader.html",
	"postquestionnaire.html"
];

psiTurk.preloadPages(pages);

var instructionPages = [ 
	"instructions/instruct-1.html",
	"instructions/instruct-2.html",
	"instructions/instruct-ready.html"
];

var preloaded_videos = {};

var stims1 = [
		"static/stimuli/tube_4.5m_109f_1b_0.avi",
		"static/stimuli/tube_4.5m_109f_1b_1.avi",
		"static/stimuli/tube_4.5m_109f_2b_0.avi",
		"static/stimuli/tube_4.5m_109f_2b_2.avi",
		"static/stimuli/tube_4.5m_109f_3b_0.avi",
		"static/stimuli/tube_4.5m_109f_3b_1.avi",
		"static/stimuli/tube_4.5m_109f_3b_2.avi",
		"static/stimuli/tube_4.5m_121f_1b_0.avi",
		"static/stimuli/tube_4.5m_121f_1b_1.avi",
		"static/stimuli/tube_4.5m_121f_2b_0.avi",
		"static/stimuli/tube_4.5m_121f_2b_2.avi",
		"static/stimuli/tube_4.5m_121f_3b_0.avi",
		"static/stimuli/tube_4.5m_121f_3b_1.avi",
		"static/stimuli/tube_4.5m_121f_3b_2.avi",
		"static/stimuli/tube_4.5m_61f_1b_0.avi",
		"static/stimuli/tube_4.5m_61f_1b_1.avi",
		"static/stimuli/tube_4.5m_61f_2b_0.avi",
		"static/stimuli/tube_4.5m_61f_2b_2.avi",
		"static/stimuli/tube_4.5m_61f_3b_0.avi",
		"static/stimuli/tube_4.5m_61f_3b_1.avi",
		"static/stimuli/tube_4.5m_61f_3b_2.avi",
		"static/stimuli/tube_4.5m_73f_1b_0.avi",
		"static/stimuli/tube_4.5m_73f_1b_1.avi",
		"static/stimuli/tube_4.5m_73f_2b_0.avi",
		"static/stimuli/tube_4.5m_73f_2b_2.avi",
		"static/stimuli/tube_4.5m_73f_3b_0.avi",
		"static/stimuli/tube_4.5m_73f_3b_1.avi",
		"static/stimuli/tube_4.5m_73f_3b_2.avi",
		"static/stimuli/tube_4.5m_85f_1b_0.avi",
		"static/stimuli/tube_4.5m_85f_1b_1.avi",
		"static/stimuli/tube_4.5m_85f_2b_0.avi",
		"static/stimuli/tube_4.5m_85f_2b_2.avi",
		"static/stimuli/tube_4.5m_85f_3b_0.avi",
		"static/stimuli/tube_4.5m_85f_3b_1.avi",
		"static/stimuli/tube_4.5m_85f_3b_2.avi",
		"static/stimuli/tube_4.5m_97f_1b_0.avi",
		"static/stimuli/tube_4.5m_97f_1b_1.avi",
		"static/stimuli/tube_4.5m_97f_2b_0.avi",
		"static/stimuli/tube_4.5m_97f_2b_2.avi",
		"static/stimuli/tube_4.5m_97f_3b_0.avi",
		"static/stimuli/tube_4.5m_97f_3b_1.avi",
		"static/stimuli/tube_4.5m_97f_3b_2.avi",
		"static/stimuli/tube_4m_109f_1b_0.avi",
		"static/stimuli/tube_4m_109f_1b_1.avi",
		"static/stimuli/tube_4m_109f_2b_0.avi",
		"static/stimuli/tube_4m_109f_2b_2.avi",
		"static/stimuli/tube_4m_109f_3b_0.avi",
		"static/stimuli/tube_4m_109f_3b_1.avi",
		"static/stimuli/tube_4m_109f_3b_2.avi",
		"static/stimuli/tube_4m_121f_1b_0.avi",
		"static/stimuli/tube_4m_121f_1b_1.avi",
		"static/stimuli/tube_4m_121f_2b_0.avi",
		"static/stimuli/tube_4m_121f_2b_2.avi",
		"static/stimuli/tube_4m_121f_3b_0.avi",
		"static/stimuli/tube_4m_121f_3b_1.avi",
		"static/stimuli/tube_4m_121f_3b_2.avi",
		"static/stimuli/tube_4m_61f_1b_0.avi",
		"static/stimuli/tube_4m_61f_1b_1.avi",
		"static/stimuli/tube_4m_61f_2b_0.avi",
		"static/stimuli/tube_4m_61f_2b_2.avi",
		"static/stimuli/tube_4m_61f_3b_0.avi",
		"static/stimuli/tube_4m_61f_3b_1.avi",
		"static/stimuli/tube_4m_61f_3b_2.avi",
		"static/stimuli/tube_4m_73f_1b_0.avi",
		"static/stimuli/tube_4m_73f_1b_1.avi",
		"static/stimuli/tube_4m_73f_2b_0.avi",
		"static/stimuli/tube_4m_73f_2b_2.avi",
		"static/stimuli/tube_4m_73f_3b_0.avi",
		"static/stimuli/tube_4m_73f_3b_1.avi",
		"static/stimuli/tube_4m_73f_3b_2.avi",
		"static/stimuli/tube_4m_85f_1b_0.avi",
		"static/stimuli/tube_4m_85f_1b_1.avi",
		"static/stimuli/tube_4m_85f_2b_0.avi",
		"static/stimuli/tube_4m_85f_2b_2.avi",
		"static/stimuli/tube_4m_85f_3b_0.avi",
		"static/stimuli/tube_4m_85f_3b_1.avi",
		"static/stimuli/tube_4m_85f_3b_2.avi",
		"static/stimuli/tube_4m_97f_1b_0.avi",
		"static/stimuli/tube_4m_97f_1b_1.avi",
		"static/stimuli/tube_4m_97f_2b_0.avi",
		"static/stimuli/tube_4m_97f_2b_2.avi",
		"static/stimuli/tube_4m_97f_3b_0.avi",
		"static/stimuli/tube_4m_97f_3b_1.avi",
		"static/stimuli/tube_4m_97f_3b_2.avi",
		"static/stimuli/tube_5m_109f_1b_0.avi",
		"static/stimuli/tube_5m_109f_1b_1.avi",
		"static/stimuli/tube_5m_109f_2b_0.avi",
		"static/stimuli/tube_5m_109f_2b_2.avi",
		"static/stimuli/tube_5m_109f_3b_0.avi",
		"static/stimuli/tube_5m_109f_3b_1.avi",
		"static/stimuli/tube_5m_109f_3b_2.avi",
		"static/stimuli/tube_5m_121f_1b_0.avi",
		"static/stimuli/tube_5m_121f_1b_1.avi",
		"static/stimuli/tube_5m_121f_2b_0.avi",
		"static/stimuli/tube_5m_121f_2b_2.avi",
		"static/stimuli/tube_5m_121f_3b_0.avi",
		"static/stimuli/tube_5m_121f_3b_1.avi",
		"static/stimuli/tube_5m_121f_3b_2.avi",
		"static/stimuli/tube_5m_61f_1b_0.avi",
		"static/stimuli/tube_5m_61f_1b_1.avi",
		"static/stimuli/tube_5m_61f_2b_0.avi",
		"static/stimuli/tube_5m_61f_2b_2.avi",
		"static/stimuli/tube_5m_61f_3b_0.avi",
		"static/stimuli/tube_5m_61f_3b_1.avi",
		"static/stimuli/tube_5m_61f_3b_2.avi",
		"static/stimuli/tube_5m_73f_1b_0.avi",
		"static/stimuli/tube_5m_73f_1b_1.avi",
		"static/stimuli/tube_5m_73f_2b_0.avi",
		"static/stimuli/tube_5m_73f_2b_2.avi",
		"static/stimuli/tube_5m_73f_3b_0.avi",
		"static/stimuli/tube_5m_73f_3b_1.avi",
		"static/stimuli/tube_5m_73f_3b_2.avi",
		"static/stimuli/tube_5m_85f_1b_0.avi",
		"static/stimuli/tube_5m_85f_1b_1.avi",
		"static/stimuli/tube_5m_85f_2b_0.avi",
		"static/stimuli/tube_5m_85f_2b_2.avi",
		"static/stimuli/tube_5m_85f_3b_0.avi",
		"static/stimuli/tube_5m_85f_3b_1.avi",
		"static/stimuli/tube_5m_85f_3b_2.avi",
		"static/stimuli/tube_5m_97f_1b_0.avi",
		"static/stimuli/tube_5m_97f_1b_1.avi",
		"static/stimuli/tube_5m_97f_2b_0.avi",
		"static/stimuli/tube_5m_97f_2b_2.avi",
		"static/stimuli/tube_5m_97f_3b_0.avi",
		"static/stimuli/tube_5m_97f_3b_1.avi",
		"static/stimuli/tube_5m_97f_3b_2.avi",
	]
stims1 = _.shuffle(stims1);

// FOR DEBUGGING ONLY!!!
stims1 = _.first(stims1, 10);

var stims2 = [
	"static/stimuli/occluder_85f_37.avi",
	"static/stimuli/occluder_85f_49.avi",
	"static/stimuli/occluder_85f_61.avi",
	"static/stimuli/occluder_85f_73.avi",
	"static/stimuli/occluder_85f_85.avi",
]
stims2 = _.shuffle(stims2);

var getStimName = function(path) {
	return path.replace("static/stimuli/", '').replace(".avi", '');
}

var Preloader = function() {

	var preload_all_videos = function() {
		var loaded = 0;
		var started_all = false;
		var start_task = false;

		// get array of interwind elements from each collection provided to function
		var stims = _.filter(_.flatten(_.zip(arguments)), function(x) { return !!x });

		var videos_to_preload_before_task = Math.max(20, Math.ceil(stims.length * 0.15));
		videos_to_preload_before_task = Math.min(videos_to_preload_before_task, stims.length);

		for (i = 0; i < stims.length; i++) { 
			preload_video(stims[i], function (file, url) {
				preloaded_videos[file] = url;
				loaded = loaded + 1;
				
				var percent = Math.floor(0.97*(loaded/videos_to_preload_before_task) * 100);
				d3.select("#info").html(percent.toString() + "%");

				if (loaded >= videos_to_preload_before_task && started_all && !start_task) {
					start_task = true;
					finish_preload();
				}
			})
		}
		started_all = true;
	}

	var finish_preload = function() {
	    psiTurk.doInstructions(
	    	instructionPages, // a list of pages you want to display in sequence
	    	function() { currentview = new Stage1(); } // what you want to do when you are done with instructions
	    );
	}

	var preload_video = function(filename, callback, retry = 2) {
		var req = new XMLHttpRequest();
		req.open('GET', filename, true);
		req.responseType = 'blob';

		var handle_retry = function() {
			if (retry > 0) {
		   		preload_video(filename, callback, retry -1)
		   	} else {
		   		console.log("failed preloading " + filename);
		   		callback(false);
		   	}
		}

		req.onload = function() {
			if (this.status === 200) {
				var videoBlob = this.response;
      			var vid = URL.createObjectURL(videoBlob); // IE10+
				
				callback(filename, vid);
			} else {
				handle_retry();
			}
		}

		req.onerror = function() {
			handle_retry();
		}

		req.send();
	}

	psiTurk.showPage('preloader.html');

	preload_all_videos(stims1, stims2);
}

var Stage1 = function() {

	var stimOnsetTime, mouseClickTime; 
	var keyboardResonseEnabled = false, mouseResonseEnabled = false, mouseTrackingEnabled = false;
	var videoRectangle;
	var mouseXRelativeToVideo, mouseYRelativeToVideo;
	var videoElement;
	var stim;
	var mouseHitMap = [];


	stims = _.map(stims1, function (s,i) {
		var videoName = getStimName(s);
		var videoParams = videoName.split("_").slice(1);
		return Object.assign(
			{
				filename: s,
				id: i, 
				videoformat: s.substr(s.lastIndexOf('.') + 1), 
				videoname: videoName,
				tube_length: videoParams[0],
				ball_speed: videoParams[1],
				branches: videoParams[2],
				outing: videoParams[3]
			});
	});

	var next = function() {
		if (stims.length===0) {
			finish();
		}
		else {
			stim = stims.shift();
			show_video(stim);
		}
	};
	
	var response_handler = function(e) {
		if (!keyboardResonseEnabled) return;

		var keyCode = e.keyCode;
		var response = "";

		switch (keyCode) {
			case 32:
				// "space"
				response="space";
				break;
			default:
				response = "";
				break;
		}
		if (response.length>0) {
			keyboardResonseEnabled = false;
			var trialTime = new Date().getTime() - stimOnsetTime;
			var clickTime = mouseClickTime ? new Date().getTime() - mouseClickTime : 0;

			psiTurk.recordTrialData(Object.assign(
			{
				'phase':"TEST",
				'stage': 1,				
				'mouseHitMap': mouseHitMap,
				'videoHieght': videoRectangle.height,
				'videoWidth': videoRectangle.width,
				'hit': true,
				'trialTime':trialTime,
              	'clickTime': clickTime
             }, stim));
			remvoe_video();
			next();
		}
	};

	function handleMouseMove(event) {
		if (!mouseTrackingEnabled) return;

        var e = event || window.event; // IE-ism

        mouseXRelativeToVideo = e.clientX - videoRectangle.left; //x position within the element.
  		mouseYRelativeToVideo = e.clientY - videoRectangle.top;  //y position within the element.

  		trackMouseLocation();
	}

	function trackMouseLocation() {
		mouseHitMap.push([mouseXRelativeToVideo, mouseYRelativeToVideo, new Date().getTime() - stimOnsetTime])
	}

	function handleMouseDown(event) {
		if (!mouseResonseEnabled) return;

        var e = event || window.event; // IE-ism

  		// pause video on when clicking on it
  		// allowing 3 pixel error margin
  		if (e.buttons && 
  			mouseXRelativeToVideo > -3 && 
  			mouseYRelativeToVideo > -3 &&
  			mouseXRelativeToVideo < videoRectangle.width + 3 &&
  			mouseYRelativeToVideo < videoRectangle.height + 3)
  		{
  			mouseResonseEnabled = false;
  			mouseTrackingEnabled = false;
  			mouseClickTime = new Date().getTime();
        	
        	if (!videoElement.node().paused)
        		videoElement.node().pause();
        }
    }

	// stop showing stimuli and move to questionnaire
	var finish = function() {
	    $("body").unbind("mousemove", handleMouseMove); // Unbind keys
	    $("body").unbind("mousedown", handleMouseDown); // Unbind keys
	    $("body").unbind("keydown", response_handler); // Unbind keys

	    var instructionPages = [
			"instructions/instruct-3.html",
		];
		psiTurk.doInstructions(
	    	[
				"instructions/instruct-3.html",
				"instructions/instruct-ready.html"
			], 
	    	function() { currentview = new Stage2(); } // what you want to do when you are done with instructions
    	);
	};
	
	var show_video = function(videoData) {
		videoElement = d3.select("#stim")
			.append("video")
			.attr("id","stim-video" + videoData.id.toString())
			.attr("autoplay", true)
			.attr("style", "height:400px;")

		var videoUrl = preloaded_videos[videoData.filename] ?? videoData.filenames;	

		videoElement
			.append("source")
			.attr("src", videoUrl)
			.attr("type", "video/" + videoData.videoformat);

		// when video starts!
		videoElement.on("loadeddata", function() {
			stimOnsetTime = new Date().getTime();
			keyboardResonseEnabled = false;
			mouseResonseEnabled = true;
			mouseTrackingEnabled = true;
			videoRectangle = videoElement.node().getBoundingClientRect();
			trackMouseLocation();
		});

		// on video paused
		videoElement.on("pause", function() {
			keyboardResonseEnabled = true;
			mouseResonseEnabled = false;
			d3.select("#stim")
			.append("div")
			.html("Press space to continue")
		});
	};

	var remvoe_video = function() {
		mouseClickTime = null;
		mouseTrackingEnabled = false;
		mouseResonseEnabled = false;

		mouseHitMap = [];
		d3.select("#stim").html("");
	};

	
	// Load the stage.html snippet into the body of the page
	psiTurk.showPage('stage.html');

	// Register the response handler that is defined above to handle any
	// key down events.
	$("body").focus().keydown(response_handler); 
	$("body").focus().mousemove(handleMouseMove);
	$("body").focus().mousedown(handleMouseDown);

	// Start the test
	next();
};

var Stage2 = function() {
	var sliderElement;
	var stim;

	stims = _.map(stims2, function (s,i) {
		var videoName = getStimName(s);
		var videoParams = videoName.split("_").slice(1);

		return Object.assign(
			{
				filename: s,
				id: i, 
				videoformat: s.substr(s.lastIndexOf('.') + 1), 
				videoname: videoName,
				ball_speed: videoParams[0]
			});
	});

	var next = function() {
		if (stims.length===0) {
			finish();
		}
		else {
			// take next stimulus
			stim = stims.shift();
			
			// reset and disable suprise input
			var intialValue = 50;

			d3.select("#suprise-input")
				.attr("disabled", true)
				.property("value", intialValue)
			d3.select("#next").attr("disabled", true);
			d3.select("#suprise-value").html(intialValue.toString());

			// load the video
			show_video(stim);
		}
	};
	
	var on_click_next = function(e) {
		var trialTime = new Date().getTime() - stimOnsetTime;
		psiTurk.recordTrialData(Object.assign(
		{
			'phase':"TEST",		
			'stage': 2,		
			'hit': true,
			'trialTime':trialTime,
          	'response': d3.select("#suprise-input").property("value")
         }, stim));
		remvoe_video();
		next();
	};

	// stop showing stimuli and move to questionnaire
	var finish = function() {
		d3.select("#info").property("finishing task..")
		end_exp();		
	};
	
	var show_video = function(videoData) {
		var videoElement = d3.select("#stim")
			.append("video")
			.attr("id","stim-video" + videoData.id.toString())
			.attr("autoplay", true)
			.attr("style" ,"height:400px;")

		var videoUrl = preloaded_videos[videoData.filename] ?? videoData.filename;	

		videoElement
			.append("source")
			.attr("src", videoUrl)
			.attr("type", "video/" + videoData.videoformat);

		// when video starts!
		videoElement.on("loadeddata", function() {
			stimOnsetTime = new Date().getTime();
		});

		// on video paused
		videoElement.on("pause", function() {
			// enable answering
			d3.select("#suprise-input").attr("disabled", null);
			d3.select("#next").attr("disabled", null);
		});
	};

	var remvoe_video = function() {
		d3.select("#stim").html("");
	};

	
	// Load the stage.html snippet into the body of the page
	psiTurk.showPage('stage2.html');

	// setup next button
	var btn = document.getElementById("next");
	btn.onclick = on_click_next;

	d3.select("#suprise-input")
		.on("change", (event) => {
			d3.select("#suprise-value")
				.html(d3.select("#suprise-input").property("value"));
		});

	// Start the test
	next();
};

var retry_timer;
var end_exp = function() {
	if (!!retry_time)
		clearTimeout(retry_timer);

	d3.select("#info").append(".")

	psiturk.saveData({
	   success: function() {
			psiturk.completeHIT()
	   },
	   error: function() {
	   		retry_timer = setTimeout(end_exp, 3000);
	   }
	});
}

// Task object to keep track of the current phase
var currentview;

/*******************
 * Run Task
 ******************/
$(window).load( function(){
	currentview = new Preloader();
});
