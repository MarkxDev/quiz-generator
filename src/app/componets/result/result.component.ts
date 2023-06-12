import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizEndData, ResultView } from 'src/app/models/questions.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  implements OnInit {

  resultView!: ResultView;

  constructor(protected activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ quizEndData }) => {
      if(quizEndData){

        const spinner = document.getElementById('initialSpinner') as HTMLElement | null;
        spinner?.remove();

        this.resultView = {quizEndData, score: this.calculateScore(quizEndData)};
        console.log('quizEndData: ', quizEndData )
        console.log('this.resultView: ', this.resultView )
      }
    });
  }

  protected calculateScore(quizEndData: QuizEndData[]): number {
    let score = 0;
    quizEndData.forEach((quizQuestion) => {
      if(quizQuestion.selected_answer === quizQuestion.correct_answer){
        score++;
      }
    });
    return score;
  }

  protected scoreToCssClass(score: number): string {
    let scoreCssClass = "";
    if(score != undefined){
      if(score <= 1){
        scoreCssClass = "red";
      }else if( score == 2 || score == 3 ){
        scoreCssClass = "yellow";
      } else {
        scoreCssClass = "green";
      }
    }
    return scoreCssClass;
  }

  protected newQuiz(){
    console.log('newQuiz');
    // window.history.back();
    this.router.navigate(['']);
  }
}
