const course = {
    title: 'JavaScript For Beginners',
    rating: 5,
    students: 30,
    isPaid: true,
    get details() {
        return `Title: ${this.title}, Rating: ${this.rating}, Students: ${this.students}, isPaid: ${this.isPaid}`;
    },
    set details(value) {
        this.title = value.title;
        this.rating = value.rating;
        this.students = value.students;
        this.isPaid = value.isPaid;
    },
}

console.log(course.details);

course.details = {
    title: 'JavaScript For Experts',
    rating: 5,
    students: 30,
    isPaid: true,
}

console.log(course.details);