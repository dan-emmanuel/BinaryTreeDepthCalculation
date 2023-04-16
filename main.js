


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


//i took a litle bit of more time to find a beetter solution to add one for the last children since 
//the last children are not counted in the depth.

// i didn't want to took to much time on this so i just added a function to add one for the last level.


// i created a second tree to test the function with a bigger tree.

console.log(addOneForLastLevel(getDepth(tree)));
console.log(addOneForLastLevel(getDepth(tree2)));


