import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.scss']
})
export class Es6Component implements OnInit {

  shows: Array<object> = [
    {
      "id": 15,
      "url": "http://www.tvmaze.com/shows/15/constantine",
      "name": "Constantine",
      "language": "English",
      "status": "Ended",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/0/154.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/0/154.jpg"
      },
      "summary": "<p>Based on the wildly popular comic book series \"Hellblazer\" from DC Comics, seasoned demon hunter and master of the occult John Constantine is armed with a ferocious knowledge of the dark arts and a wickedly naughty wit. He fights the good fight - or at least he did. With his soul already damned to hell, he's decided to abandon his campaign against evil until a series of events thrusts him back into the fray, and he'll do whatever it takes to protect the innocent. With the balance of good and evil on the line‎, <b>Constantine </b>will use his skills to travel the country, find the supernatural terrors that threaten our world and send them back where they belong. After that, who knows... maybe there's hope for him and his soul after all.</p>",
    },
    {
      "id": 16,
      "url": "http://www.tvmaze.com/shows/16/penny-dreadful",
      "name": "Penny Dreadful",
      "language": "English",
      "status": "Ended",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/48/122237.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/48/122237.jpg"
      },
      "summary": "<p>Some of literature's most terrifying characters, including Dr. Frankenstein and his monster, Dorian Gray, and iconic figures from the novel Dracula are lurking in the darkest corners of Victorian London. They are joined by a core of original characters in a complex, frightening new narrative. <b>Penny Dreadful </b>is a psychological thriller filled with dark mystery and suspense, where personal demons from the past can be stronger than vampires, evil spirits and immortal beasts.</p>"
    },
    {
      "id": 18,
      "url": "http://www.tvmaze.com/shows/18/the-amazing-race",
      "name": "The Amazing Race",
      "language": "English",
      "status": "Running",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/141/352923.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/141/352923.jpg"
      },
      "summary": "<p>From athletes and actors to tattoo artists, social workers and musicians - a diverse mix of teams will need to utilize their street smarts and savvy know-how to compete in the race of their lifetime.</p>"
    }, {
      "id": 19,
      "url": "http://www.tvmaze.com/shows/19/supernatural",
      "name": "Supernatural",
      "language": "English",
      "status": "Running",
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/211/528024.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/211/528024.jpg"
      },
      "summary": "<p>This haunting series follows the Winchester brothers as they crisscross the lonely and mysterious back roads of the country in their '67 Chevy Impala, hunting down every evil supernatural force they encounter along the way.</p>"
    }];



  constructor() {
    // this.ES6_Var_Let();
    // this.ES6_ForLoop();
    // this.ES6_Console()
    // this.ES6_START_END_WIDTH();
    // this.ES6_MAP();
    // this.ES6_Find();
  }


  ngOnInit() {

  }

  ES6_Var_Let() {
    if (x == 1) {
      console.log("apple");
    } else {
      console.log("bannana");
    }

    var x = 2;
  }

  ES6_ForLoop() {
    for (let show of this.shows) {
      console.log("show : ", show);
    }
  }

  ES6_Console() {
    let firstName = "shay"
    let lastName = "l"
    let yearOfBirth = 2000

    // ES5
    console.log('This is ' + firstName + ' ' + lastName);

    // ES6
    console.log(`This is ${firstName} ${lastName}`);
  }

  ES6_START_END_WIDTH() {
    let firstName = "shay"
    let lastName = "l"

    const n = `${firstName} ${lastName}`;
    console.log(n.startsWith('J'));
    console.log(n.endsWith('th'));
    console.log(n.includes('oh'));
    console.log(`${firstName} `.repeat(5));
  }

  ES6_Arrow_Function = () => {
    console.log("ES6_Arrow_Function");
  }

  ES6_MAP = () => {
    let arr: Array<number> = [2, 4, 6, 8, 10];

    arr.map(item => {
      console.log(item)
    })

    this.shows.map(show => {
      console.log("Show : ", show['name'])
      console.log("----------------------")
    })
  }


  ES6_Find = () => {
    let show = this.shows.find(show => {
      return show['id'] == 19
    })

    let showIndex = this.shows.findIndex(show => {
      return show['id'] == 19
    })

    console.log("FIND : ", show, showIndex)
  }
}
