/* this class defines how recipe should look like
* this should be available for all classes that makes use of recipe
* */
export class RecipeModel {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
