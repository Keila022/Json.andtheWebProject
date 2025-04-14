async function filterMajors(major) {
  const response = await fetch('cit5students.json');
  const students = await response.json();

  const filtered = students.filter(student => student.major === major);

  const source = document.getElementById('template').innerHTML;
  const template = Handlebars.compile(source);
  const html = template({ students: filtered });

  document.getElementById('result').innerHTML = html;
}
