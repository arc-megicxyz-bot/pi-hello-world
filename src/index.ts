export function hello(name = "World") {
  return `Hello ${name} from Pi!`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(hello());
}
