export  function returnPath(data){
  // jgsx 取首字母 //0总站(边管)我加的接口没有0  1是总局 2是总站(边检) 3是支队或者边检站 4是大队 5是派出所
  let path = ['/Stand/SSO','/Bureau/SSO','/StandFI/ExamineFI','/frontierInspectionStation','/detachment']
  //边管
  let sideTube = ['广西出入境边防检查总站','云南出入境边防检查总站','新疆出入境边防检查总站','西藏出入境边防检查总站','甘肃出入境边防检查总站','黑龙江出入境边防检查总站','内蒙古出入境边防检查总站','吉林出入境边防检查总站','辽宁出入境边防检查总站']

  let pathLevel
  if(sideTube.includes(data.jgmc)){
    pathLevel = {
      path:path[0],//总站(边管)
      Level:0,
    }
  }else {
    pathLevel = {
      path:path[data.jgsx.slice(0,1)],
      Level:data.jgsx.slice(0,1),
    }
  }
  if( data.jgsxmc== '边管支队'){
    pathLevel = {
      path:path[4],
      Level:4,
    }
  }

  return pathLevel
}
