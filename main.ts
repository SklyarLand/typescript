// возвращает сумму элементов массива
export function arraySum(arr: number[]): number {
  return arr.reduce((sum, num) => {
    return sum += num;
  }, 0);
}

// возвращает исходную строку в Title Case
// почему то на вход была написана не строка а массив
export function toTitleCase(str: string): string {
  let arr: string[] = str.split(" ");
  arr = arr.map(($str) =>
    str[0].toUpperCase() + str.slice(1)
  )
  return arr.join(" ");
}

// возвращает Promise, который зарезолвит true, если b больше чем a, и зареджектит, если наоборот
export function promiseCompare(a: number, b: number): Promise<true> {
  return new Promise((resolve, reject) => {
      (a < b) ? resolve(true): reject();
  });
}

export async function asyncCompare(): Promise<true> {
  let a: number = 10;
  let b: number = 5;
  let res: any = false;

  while (res !== true) {
    try {
      res = await promiseCompare(a, b);
    }
    catch (e) {
      b++;
    }
  }

  return res;
}
