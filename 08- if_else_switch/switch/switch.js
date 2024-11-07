
let tecnologia = "html".toUpperCase();

switch (tecnologia) {
  case "HTML":
    console.log(`Sua tecnologia preferida ${tecnologia}, que é utilizada para estrutural seu site.`);
    break;

    case "CSS":
      console.log(`Sua tecnologia preferida é ${tecnologia}, que estiliza e da vida ao seu site.`);
      break;

      case "JAVASCRIPT":
      console.log(`Sua tecnologia preferida é ${tecnologia}, linguagem de programação de tipagem fraco, porem dinamica.`);
      break;

      case "TYPESCRIPT":
      console.log(`Sua tecnologia preferida é ${tecnologia}, superset JAVASCRIPT, que auxilia no seu código.`);
      break;

      case "REACT":
      console.log(`Sua tecnologia preferida é ${tecnologia}, .`);
      break;

      default:
        console.log("Tecnologia desconhecida, tente novamente");
        break;
}