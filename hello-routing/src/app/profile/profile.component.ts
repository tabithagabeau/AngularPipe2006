import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RocpService } from '../services/rocp.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentHero = ' No Hero';

  // I am making an ts object version of my form that I wll pair with the formgit
  // I create on the HTML page.
  todos = new FormGroup ({
    title: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private rocp: RocpService) { }

// the getTodosEc2/PostTodosEc2 are hitting the Ec2 records via the rocp service class imported via the constructor
postTodosEc2(todoSub: FormGroup) {
  // stringfing values, due to the request body content-type baing a JSON
  let form = JSON.stringify(todoSub.value);
  this.rocp.postTodo(form).subscribe(// here we re using the Publisher - Observer Model
    // PUB/SUB design pattern: the service class (rocp) is our Publisher which publishes Observable
    // this ts class if our Subscriber which fires back by  the word .subscribe in Get/Post methods
    response => {
      console.log('success');
    }
  );

  }
  getTodosEc2() {
    this.rocp.getTodos().subscribe(
      response => {
        console.log(response);

      }
    );
  }

  // to get heroname parameter below, we add route: ActivatedRoute
// we don't have to instiantiate this bc the dependency injection in service class will do
  ngOnInit(): void { // life cyecle hooks
    this.currentHero = this.route.snapshot.paramMap.get('heroname');
  }

}
