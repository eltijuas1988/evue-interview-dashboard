import {BlanketFolder, Ironer, Machine, Sorter, Washer} from '../models'

export const buildDatasourceFromData = data => {
  if (!data) return null

  const {name} = data
  if (name.includes("Sorting")) {
    return new Sorter(data)

  } else if (name.includes("Washer")) {
    return new Washer(data)

  } else if (name.includes("Ironer")) {
    return new Ironer(data)

  } else if (name.includes("Folder")) {
    return new BlanketFolder(data)

  } else {
    return new Machine(data)
  }
}
