/**
 * 20240503 daily challenge
 * https://leetcode.com/problems/compare-version-numbers/
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let version1Cutter = version1.split('.');
    let version2Cutter = version2.split('.');
    while(true){
        if (version1Cutter.length==0 && version2Cutter.length == 0) return 0;

        let v1e = parseInt(version1Cutter.shift()); // v1 element.
        let v2e = parseInt(version2Cutter.shift()); // v2 element.
        let v1 = v1e?v1e:0;
        let v2 = v2e?v2e:0;
        if(v1>v2)
            return 1;
        if(v1<v2)
            return -1;
    }
};