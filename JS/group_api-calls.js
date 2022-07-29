var calls = [
    'emp/staff/admin/devices',
    'emp/staff/driver/cars',
    'emp/staff/manager',
    'admin/vehicle/active',
    'admin/vehicle/inactive'
];

// {
//     'part1' {
//         count: 0,
//         content: {

//         }
//     }
// }

function group(calls) {
    let res = {};
    for (let call of calls) {
        traverse(call.split('/').filter(entry => entry.length), res);
    }

    print(res);
}

function print(res, prefix = '') {
    if (!res) return;

    for (let key of Object.keys(res)) {
        if (key === 'count') continue;

        const val = res[key];

        const count = `(${ val.count })`;

        console.log(`${prefix}${key}${count}`);
        print(val, prefix + '--');
    }
}

function traverse(parts, res) {
    if (parts.length === 0) return;

    const [path, ...rest] = parts;

    if (path in res) {
        res[path].count ++;
    } else {
        res[path] = { count: 1 };
    }

    traverse(rest, res[path]);
}

group(calls);