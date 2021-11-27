import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

//计算一年缴纳的五险一金
function calWelfareAll(originSalary, pension, medical, unemployee, injury, maternity, housingFund) {
  return originSalary*(pension + medical + unemployee + injury + maternity + housingFund)/100 * 12
}

//计算一年应缴个人所得税额
function taxPerYear(originSalaryAll, welfareAll) {
  let taxRate = 0; //税率
  let fastNum = 0; //速算扣除数
  //应纳税所得额 = 每一纳税年度的收入额 - 费用六万元 - 专项扣除 - 专项附加扣除 - 依法确定的其他扣除
  let salsryPayTax = (originSalaryAll - 60000 - welfareAll - 1500*12 - 0);
  if(salsryPayTax <= 36000) {
    taxRate = 0.03;
  } else if(salsryPayTax <= 144000) {
    taxRate = 0.1;
    fastNum = 2520;
  } else if(salsryPayTax <= 300000) {
    taxRate = 0.2;
    fastNum = 16920;
  } else if(salsryPayTax <= 420000) {
    taxRate = 0.25;
    fastNum = 31920;
  } else if(salsryPayTax <= 660000) {
    taxRate = 0.3;
    fastNum = 52920;
  } else if(salsryPayTax <= 960000) {
    taxRate = 0.35;
    fastNum = 85920;
  } else {
    taxRate = 0.45;
    fastNum = 181920;
  }
  return salsryPayTax*(taxRate) - fastNum;
}

function App() {
  const [originSalaryInfo, setOriSalaryInfo] = useState({originSalary: 24000, month: 16});
  const [welfare, setWelfare] = useState({pension: 8, medical: 2, unemployee: 0.2, injury: 0, maternity:0, housingFund: 12});

  let {pension, medical, unemployee, injury, maternity, housingFund} = welfare;
  let welfareAll = calWelfareAll(originSalaryInfo.originSalary, pension, medical, unemployee, injury, maternity, housingFund);
  let originSalaryAll = originSalaryInfo.originSalary * originSalaryInfo.month;
  const [afterTaxSalary, setAfterTaxSalary] = useState(()=> {
    const perYear = originSalaryAll - taxPerYear(originSalaryAll, welfareAll) - welfareAll;
    const perMonth = perYear / originSalaryInfo.month;
    const bouns = perMonth * (originSalaryInfo.month - 12);
    return {
      perYear,
      perMonth,
      bouns
    }
  });

  useEffect(() => {
    setAfterTaxSalary(() => {
      
      const perYear = originSalaryAll - taxPerYear(originSalaryAll, welfareAll) - welfareAll;
      const perMonth = perYear / originSalaryInfo.month;
      const bouns = perMonth * (originSalaryInfo.month - 12);
      return {
        perYear,
        perMonth,
        bouns
      }
    })
  }, [originSalaryInfo, welfareAll, originSalaryAll]);
  
  const salaryChange = (value, type)=>{
    if(!isNaN(Number(value))){
      if(type === 'salary') {
        setOriSalaryInfo((prev) => { return {originSalary:Number(value), month:prev.month}})
        welfareAll = calWelfareAll(originSalaryInfo.originSalary, pension, medical, unemployee, injury, maternity, housingFund)
        console.log(originSalaryInfo)
        
      }
      else {
        setOriSalaryInfo((prev) => { return {originSalary:prev.originSalary, month:Number(value)}})
        welfareAll = calWelfareAll(originSalaryInfo.originSalary, pension, medical, unemployee, injury, maternity, housingFund)
        console.log(originSalaryInfo)
        setAfterTaxSalary(() => taxPerYear(originSalaryInfo.originSalary, originSalaryInfo.month, welfareAll))
      }
      
    }
  }

  const welfareChange = (value, type)=>{
    value = Number(value);
    if(!isNaN(value)) {
      switch (type) {
        case 'pension':
          setWelfare({...welfare, pension: value})
          break;
        case 'medical':
          setWelfare({...welfare, medical: value})
          break;
        case 'unemployee':
          setWelfare({...welfare, unemployee: value})
          break;
        case 'injury':
          setWelfare({...welfare, injury: value})
          break;
        case 'maternity':
          setWelfare({...welfare, maternity: value})
          break;
        case 'housingFund':
          setWelfare({...welfare, housingFund: value})
          break;
        default:
      }
      let {pension, medical, unemployee, injury, maternity, housingFund} = welfare;
      welfareAll = calWelfareAll(originSalaryInfo.originSalary, pension, medical, unemployee, injury, maternity, housingFund)
    }
    
  }

  return (
    <div className="App">
      <div className="container">
        <div>
          <label>税前每月工资</label><Input id='originSalary' value={originSalaryInfo.originSalary} onChangeCapture={(e) => salaryChange(e.target.value, 'salary')} style={{ width: 150 }} />
          <label>月数</label><Input id='originSalary' defaultValue={originSalaryInfo.month} onChange={(e) => salaryChange(e.target.value, 'month')} style={{ width: 150 }} />
          <hr/>
        </div>
        {/* <div>五险一金缴纳比例</div> */}
        <div><label>养老保险</label><Input id='yanglao' defaultValue={pension} onChange={(e)=>welfareChange(e.target.value, 'pension')} style={{ width: 150 }} />%</div>
        <div><label>医疗保险</label><Input id='yiliao' defaultValue={medical} onChange={(e)=>welfareChange(e.target.value, 'medical')} style={{ width: 150 }} />%</div>
        <div><label>失业保险</label><Input id='shiye' defaultValue={unemployee} onChange={(e)=>welfareChange(e.target.value, 'unemployee')}  style={{ width: 150 }} />%</div>
        <div><label>工伤保险</label><Input id='gongshang' defaultValue={injury} onChange={(e)=>welfareChange(e.target.value, 'injury')} style={{ width: 150 }} />%</div>
        <div><label>生育保险</label><Input id='shengyu' defaultValue={maternity} onChange={(e)=>welfareChange(e.target.value, 'maternity')} style={{ width: 150 }} />%</div>
        <div><label>住房公积金</label><Input id='gongjijin' defaultValue={housingFund} onChange={(e)=>welfareChange(e.target.value, 'housingFund')} style={{ width: 150 }} />%</div>
        <hr/>
        <div><label>税后年薪</label><Input id='afterTaxSalary' value={afterTaxSalary.perYear} style={{ width: 150 }} /></div>
        <div><label>税后月薪</label><Input id='afterTaxSalary' value={afterTaxSalary.perMonth} style={{ width: 150 }} /></div>
        <div><label>年终奖</label><Input id='afterTaxSalary' value={afterTaxSalary.bouns} style={{ width: 150 }} /></div>
      </div>
      <footer>code by llldmiao</footer>
      {/* 相关参考：http://gkml.samr.gov.cn/nsjg/bgt/202106/t20210610_330513.html
        https://www.zhihu.com/question/24529019
      */}
    </div>
    
  );
}

export default App;
