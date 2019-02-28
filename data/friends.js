// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    "name":"Mickey",
    "photo":"https://i.ytimg.com/vi/mRf3-JkwqfU/hqdefault.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        4
      ]
  },
  {
    "name":"Minnie",
    "photo":"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg",
    "scores":[
        5,
        4,
        4,
        4,
        5,
        5,
        4,
        3,
        4,
        4
      ]
  },
  {
    "name":"Goofy",
    "photo":"https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg",
    "scores":[
        5,
        4,
        4,
        3,
        2,
        4,
        2,
        1,
        4,
        4
      ]
  },
  {
    "name":"Donald",
    "photo":"https://cdn.vox-cdn.com/thumbor/YEE5J4Qilinte0CWTG7hRDEhxJA=/0x0:1920x1280/1200x800/filters:focal(807x487:1113x793)/cdn.vox-cdn.com/uploads/chorus_image/image/61479233/dog_2988868_1920.0.jpg",
    "scores":[
        3,
        3,
        2,
        2,
        4,
        3,
        3,
        4,
        4,
        4
      ]
  },
  {
    "name":"Scrooge",
    "photo":"https://ybxzcgnc7b-flywheel.netdna-ssl.com/wp-content/uploads/2016/11/crying.jpg",
    "scores":[
        5,
        3,
        1,
        1,
        1,
        1,
        2,
        2,
        4,
        5
      ]
  },
  {
    "name":"Chip",
    "photo":"https://parade.com/wp-content/uploads/2018/03/golden-puppy-life-national-geographic-ftr-1.jpg",
    "scores":[
        5,
        3,
        4,
        4,
        5,
        3,
        5,
        5,
        4,
        4
      ]
  },
  {
    "name":"Dale",
    "photo":"https://www.willardvet.com/sites/default/files/2IeTff-V_400x400.jpeg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;