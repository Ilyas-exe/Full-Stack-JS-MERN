let students = [
    {
        id: 0,
        name: "Jane Doe",
        age: 21,
        major: "Computer Science"
    },
    {
        id: 1,
        name: "John Smith",
        age: 22,
        major: "Mathematics"
    },
    {
        id: 2,
        name: "Emily Jones",
        age: 20,
        major: "Biology"
    }
];


exports.getAll = () => students;
exports.getById = (id) => {
    return students.find(student => student.id == id);
};
exports.create = (student) => {
    students.push(student)
    return students
}
exports.update = (id, updatedData) => {
    students = students.map(student => {
        if (student.id == id) {
            return {
                id: id,
                name: updatedData.name,
                age: updatedData.age,
                major: updatedData.major
            }
        }
        return student
    })
    return students
}
exports.remove = (id) => {
    const originalLength = students.length;
    students = students.filter(student => student.id != id);
    return students.length < originalLength;
}
