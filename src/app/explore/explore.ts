import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.html',
  styleUrls: ['./explore.css']
})
export class ExploreComponent {

  items: any = [
    {
      title: '有哪里有好玩的地方？',
      time: new Date(),
      content: '人生的成果来源于你每日的奋发图强，如果你规划好了自己的途径并且选择自己的路你的人生更会是像一道坚固的水泥一样，自己创业会得到许多的学习和观察能力，你选择好了就开始执行并且达成一定的预期结果，这样会使你个人更有效的完成自己的设定的目标，我相信每一个人都可以做一份事业出来给自己一个梦想，我们选择先从小的基础开始而且要漫步的开始不能一步登天这样毫无意义，你选择好的事业就该从小事去做，比如你没有资金你可以选择打工开始并每个月得到的工资就留给自己当作投资的项目来做，我相信创业并不是决定你口袋里的钱多少更深的解释应该你要懂得如何利用的资金去做一份有回报的事业，许多人在我的眼里只是知道每天懂得吃饭工作之外就不知道剩下的时间如何利用他们，而且我看见许多人有更好的时间都不去利用而是想游手好闲整体度过悠闲的时间实在是浪费最好的青春。'
    }, {
      title: '有哪里有好玩的地方？',
      time: new Date(),
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: '人生的成果来源于你每日的奋发图强，如果你规划好了自己的途径并且选择自己的路你的人生更会是像一道坚固的水泥一样，自己创业会得到许多的学习和观察能力，你选择好了就开始执行并且达成一定的预期结果，这样会使你个人更有效的完成自己的设定的目标，我相信每一个人都可以做一份事业出来给自己一个梦想，我们选择先从小的基础开始而且要漫步的开始不能一步登天这样毫无意义，你选择好的事业就该从小事去做，比如你没有资金你可以选择打工开始并每个月得到的工资就留给自己当作投资的项目来做，我相信创业并不是决定你口袋里的钱多少更深的解释应该你要懂得如何利用的资金去做一份有回报的事业，许多人在我的眼里只是知道每天懂得吃饭工作之外就不知道剩下的时间如何利用他们，而且我看见许多人有更好的时间都不去利用而是想游手好闲整体度过悠闲的时间实在是浪费最好的青春。'
    }, {
      title: '哪里有坑？',
      time: new Date(),
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
      'A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
      'bred for hunting.'
    }, {
      title: '如何看待某某事件',
      time: new Date(),
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: '啊哈哈哈哈哈，你看你在干神马？你自己都不知道吧，哈哈哈哈哈'
    }
  ];
  notes: any = [
    {
      name: 'Vacation Itinerary'
    },
    {
      name: 'Kitchen Remodel'
    }
  ];
}
