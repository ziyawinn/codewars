class God{
    /**
     * @returns Human[]
     */
      static create(){
        return [new Man, new Woman]
        // code
      }
    }
    class Human{}
    class Woman extends Human{}
    class Man extends Human{}
    // code