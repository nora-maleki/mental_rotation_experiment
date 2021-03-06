// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Welcome to the experiment.
            <br />
            <br />
            You are taking part in a short experiment that takes ca. 10 minutes.
            <br />
            <br />
            We appreciate the time you are taking to to help us.`,
  buttonText: 'continue'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `This experiment consists of two parts. Practice trials and main trials.
            <br />
            <br />
            In each trial you will see two objects.
            <br />
            You should decide whether these objects are two different presentations of 
            the <strong>same</strong> object or they are <strong>different</strong> objects.
            <br />
            <br />
            Press <strong>F</strong> if they are the <strong>same</strong> object.
            <br />
            Press <strong>J</strong> if they are <strong>different</strong>. 
            <br />
            <br />
            Please react as fast as possible.
            <br />
            <br />
            You will first do the practice trials and after that proceed to the main trials.
            <br />
            You will be informed before starting the main trial.
            <br />
            <br />
            Please press the button below to proceed.`,
  buttonText: 'start practice trials'
});

// For most tasks, you need instructions views
const main_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Main Experiment Instructions',
  text: `You are now ready to begin the main experiment.
            <br />
            There will be no feedback in this session.
            <br />
            <br />
            <strong><i>Reminder:</i></strong>
            <br />
            <br />
            Press <strong>F</strong> if the objects are the <strong>same</strong>
            <br />
            Press <strong>J</strong> if they are <strong>different</strong>
            <br />
            <br />
            Please react as fast as possible.
            <br />
            <br />
            Press the button below to proceed.`,
  buttonText: 'start experiment'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'm??nnlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'H??chster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universit??rer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

// Here, we initialize a normal key_press view as practice trials
const key_press_practice = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can use a smaller value (for testing), but not a larger value
  trials: trial_info_practice.key_press.length,
  // name should be identical to the variable name
  name: 'key_press_practice',
  data: _.shuffle(trial_info_practice.key_press),
  pause: 250
});

// Here, we initialize a normal key_press view as main trials
const key_press_main = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can use a smaller value (for testing), but not a larger value
  trials: trial_info.key_press.length,
  // name should be identical to the variable name
  name: 'key_press_main',
  data: _.shuffle(trial_info.key_press),
  pause: 250
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, textbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
