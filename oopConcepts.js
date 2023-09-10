class Job {
  constructor(role, salary, applicationLink, isRemote) {
    this.role = role;
    this.salary = salary;
    this.applicationLink = applicationLink;
    this.isRemote = isRemote;
  }
}

console.log (Job);

let job1 = new Job(
  "Software Engineer",
  200000,
  "meta.com/careers/SWE-role/apply",
  true
);



let job2 = new Job(
  "Head of Design",
  175000,
  "amazon.com/careers/hod-role",
  false
);

console.log (job1);
console.log(job2);