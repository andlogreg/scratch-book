const course = {
    title: 'JavaScript For Beginners',
    rating: 5,
    students: 30,
    isPaid: true,
    get details() {
        return `Title: ${this.title}, Rating: ${this.rating}, Students: ${this.students}, isPaid: ${this.isPaid}`;
    },
    set details(value) {
        if (typeof value === 'number') { // silly example, but you get the point
            throw new Error('Details must not be a number');
        }
        this.title = value.title;
        this.rating = value.rating;
        this.students = value.students;
        this.isPaid = value.isPaid;
    },
}

// course.details = 25; // this will throw an error because the details property is not a number

// try and catch
try {
    course.details = 25;
} catch (e) {
    console.log(e.message);
}
