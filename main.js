


const tree = {
  value: 8,
  children: [
    {
      value: 3,
      children: [
        {
          value: 1,
          children: [

          ]
        },
        {
          value: 6,
          children: [
            {
              value: 4,
              children: [

              ]
            },
            {
              value: 7,
              children: [

              ]
            }
          ]
        }
      ]
    },

  ]
}
const tree2 = {
  value: 8,
  children: [
    {
      value: 3,
      children: [
        {
          value: 1,
          children: [
            {
              value: 4,
              children: [

              ]
            },
            {
              value: 7,
              children: [
                {
                  value: 6,
                  children: [
                    {
                      value: 4,
                      children: [

                      ]
                    },
                    {
                      value: 7,
                      children: [
                        {
                          value: 6,
                          children: [
                            {
                              value: 4,
                              children: [

                              ]
                            },
                            {
                              value: 7,
                              children: [
                                {
                                  value: 6,
                                  children: [
                                    {
                                      value: 4,
                                      children: [

                                      ]
                                    },
                                    {
                                      value: 7,
                                      children: [
                                        {
                                          value: 4,
                                          children: [

                                          ]
                                        },
                                        {
                                          value: 7,
                                          children: [
                                            {
                                              value: 6,
                                              children: [
                                                {
                                                  value: 4,
                                                  children: [

                                                  ]
                                                },
                                                {
                                                  value: 7,
                                                  children: [
                                                    {
                                                      value: 6,
                                                      children: [
                                                        {
                                                          value: 4,
                                                          children: [

                                                          ]
                                                        },
                                                        {
                                                          value: 7,
                                                          children: [
                                                            {
                                                              value: 6,
                                                              children: [
                                                                {
                                                                  value: 4,
                                                                  children: [

                                                                  ]
                                                                },
                                                                {
                                                                  value: 7,
                                                                  children: [

                                                                  ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          value: 6,
          children: [
            {
              value: 4,
              children: [

              ]
            },
            {
              value: 7,
              children: [
                {
                  value: 6,
                  children: [
                    {
                      value: 4,
                      children: [

                      ]
                    },
                    {
                      value: 7,
                      children: [
                        {
                          value: 6,
                          children: [
                            {
                              value: 4,
                              children: [

                              ]
                            },
                            {
                              value: 7,
                              children: [
                                {
                                  value: 6,
                                  children: [
                                    {
                                      value: 4,
                                      children: [

                                      ]
                                    },
                                    {
                                      value: 7,
                                      children: [

                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

  ]
}



const getDepth = (tree) => !tree?.children?.length ? 0 : 1 + Math.max(...tree.children.map(getDepth))

const addOneForLastLevel = (depth) => depth + 1

//I took a litle bit of more time to find a beetter solution to add one for the last children since it has no children, it's not counted in the depth.

// I didn't want to take to much time on this so i just added a function to add one for the last level.



//so In order to get only pure functions I created a function to add one for the last level.

console.log(addOneForLastLevel(getDepth(tree)));
console.log(addOneForLastLevel(getDepth(tree2)));


