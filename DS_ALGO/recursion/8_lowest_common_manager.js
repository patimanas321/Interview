function getLowestCommonManager(topManager, report1, report2) {
    let commonManager = null;

    const traverse = (root) => {
        let sum = 0;
        if (root === report1 || root === report2) {
            sum ++;
        }

        for (const report of root.directReports) {
            sum += traverse(report);
        }

        if (sum === 2 && !commonManager) {
            commonManager = root;
        }

        return sum;
    };

    traverse(topManager);

    return commonManager;
}

class OrgChart {
    constructor(name) {
        this.name = name;
        this.directReports = [];
    }
}