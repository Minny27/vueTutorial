// 돔에 연결하고 데이터를 묶는다
// 모든 Vue 앱은 Vue 생성자로 인스턴스를 생성해야만한다.
const app = new Vue({

	// html 과 연결 시킬 때 사용 -> 웹페이지에 마운트됨
	el: "#myApp",

	// mvvm 패턴이 적용된 데이터를 관찰
	data: {
		people: [
			{
				name: "이승민",
				nickName: "고급개발자",
				age: 20,
			},

			{
				name: "준기",
				nickName: "얼짱",
				age: 21,
			},

			{
				name: "화준",
				nickName: "친절남",	
				age: 22,
			}
		],
	},

	// data: {
	// 	jeff: {
	// 			name: "이승민",
	// 			nickName: "고급개발자",
	// 			age: 20,
	// 		},

	// 	susan: {
	// 			name: "준기",
	// 			nickName: "얼짱",
	// 			age: 21,
	// 		},

	// 	jimmy: {
	// 			name: "화준",
	// 			nickName: "친절남",	
	// 			age: 22,
	// 		}
	// },
	

	// computed: {
	// 	printJeffName() {
	// 		return `${this.jeff.nickName} ${this.jeff.name}`
	// 	},
	// 	printSusanName() {
	// 		return `${this.susan.nickName} ${this.susan.name}`
	// 	},
	// 	printJimmyName() {
	// 		return `${this.jimmy.nickName} ${this.jimmy.name}`
	// 	},
	// 	jeffInOneYear() {
	// 		return this.jeff.age + 1;
	// 	}
	// },

	filters: {
		// 이름을 필터링
		printName(inputValue) {
			return `${inputValue.nickName} ${inputValue.name}`
		},

		inOneYear(age){
			return age + 1
		},
	},

	// 함수 정의
	methods: {
		// 나이 한 살 증가
		addAge(person) {
			person.age += 1
			console.log("addAge() called / person.name", person.name);
		},

		// 나이 한 살 감소
		minusAge(person) {
			person.age -= 1
			console.log("minusAge() called / person.name", person.name);
		},
		
	},


	beforeCreate() {
		console.log("beforeCreate() called");
	},

	created() {
		console.log("created() called");
	},

	beforeMount() {
		console.log("beforeMount() called");
	},

	// js와 html 마운트가 되어야 화면렌더링이 된다.
	mounted() {
		console.log("mounted() called");
	},

	beforeUpdate() {
		console.log("beforeUpdate() called");
	},

	updated() {
		console.log("updated() called");
	},

	beforeDestroy() {
		console.log("beforeDestroy() called");
	},

	destroy() {
		console.log("destroy() called");
	},

	template: `

		<div> 
			<h2 v-for="person in people">
				<h4>
					{{person | printName}}
				</h4>
				<h5>나이 {{person.age}}</h5>
				<input type="text" v-model="person.name"/>
				<input type="text" v-model="person.nickName"/>
				<button v-on:click='addAge(person)'>+</button>
				<button v-on:click='minusAge(person)'>-</button>
				<br>





		</div>




	`





	// Step 2
	// template: `
	// 	<div> 
	// 		<h4>이름: {{printJeffName}}, 나이: {{jeffInOneYear}}
	// 		<br>
	// 		<h4>이름: {{printSusanName}}, 나이: {{susan.age}}
	// 		<br>
	// 		<h4>이름: {{printJimmyName}}, 나이: {{jimmy.age}}
			
	// 		<br>

	// 		<h4>이름: {{jeff | printName}} , 나이: {{jeff.age | inOneYear}}</h2>
	// 		<br>
	// 		<h4>이름: {{susan | printName}} , 나이: {{susan.age | inOneYear}}</h2>
	// 		<br>
	// 		<h4>이름: {{jimmy | printName}}, 나이: {{jimmy.age | inOneYear}}</h2>

	// 	</div>
	// `


	// Step 1
	// template: `
	// 	<div> 
	// 		<h2>이름: {{jeff.name}}</h2>
	// 		<h2>나이: {{jeff.age}}</h2>
	// 		<br>
	// 		<h2>친구1: {{jimmy}}</h2>
	// 		<h2>친구2: 이름: {{susan.name}}, 나이: {{susan.age}} </h2>
	// 	</div>
	// `

});
