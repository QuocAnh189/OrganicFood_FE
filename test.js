let user = {
  username: 'Anh Quoc',
  rc1: () => {
    console.log('Hello' + this.username);
  },
  rc2: function () {
    console.log('Hello' + this.username);
  }
};

user.rc1();
user.rc2();
