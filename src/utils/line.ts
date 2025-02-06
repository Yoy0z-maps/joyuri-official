export class Line {
  color: string;
  speed: number;
  total: number;
  stageWidth: number;
  stageHeight: number;
  points: { x: number; y: number }[];
  gap: number;
  yOffset: number;

  constructor(speed: number, total: number, yOffset: number) {
    this.speed = speed;
    this.total = total;
    this.yOffset = yOffset;

    // 초기화
    this.color = "#111";
    this.stageWidth = 0;
    this.stageHeight = 0;
    this.points = [];
    this.gap = 0;
  }

  // 화면의 크기 변동애 따라 동적으로 캔버스 크기, 포인트 위치 및 포인트 간격 재설정
  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.points = [];
    this.gap = Math.ceil(this.stageWidth / (this.total - 2)) * 6;

    for (let i = 0; i < this.total; i++) {
      this.points[i] = {
        x: i * this.gap,
        y: this.getY() + this.yOffset,
      };
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.color; // 선 색상
    ctx.lineWidth = 3; // 선 굵기
    ctx.beginPath(); // 경로 시작

    let cur = this.points[0]; // 현재 포인트
    let prev = cur; // 이전 포인트

    let dots = [];
    cur.x += this.speed;

    // 포인트가 화면 밖으로 나가면 새로운 포인트를 추가 및 제거
    if (cur.x > -this.gap) {
      this.points.unshift({
        x: -(this.gap * 2),
        y: this.getY(),
      });
    } else if (cur.x > this.stageWidth + this.gap) {
      this.points.splice(-1);
    }

    // 경로의 시작점
    ctx.moveTo(cur.x, cur.y);

    let prevCx = cur.x;
    let prevCy = cur.y;

    // 포인트 간의 곡선 그리기
    for (let i = 1; i < this.points.length; i++) {
      cur = this.points[i];
      cur.x += this.speed;
      const cx = (prev.x + cur.x) / 2;
      const cy = (prev.y + cur.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, cx, cy); // 부드러운 곡선 그리는 메서드

      dots.push({
        x1: prevCx,
        y1: prevCy,
        x2: prev.x,
        y2: prev.y,
        x3: cx,
        y3: cy,
      });

      prev = cur;
      prevCx = cx;
      prevCy = cy;
    }

    ctx.lineTo(prev.x, prev.y);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.stroke(); // 경로를 따라 선 그리기

    return dots;
  }

  // 선의 높낮이 랜덤하게 설정
  getY() {
    const min = this.stageHeight / 3;
    const max = this.stageHeight - this.stageHeight / 3;

    return min + Math.random() * (max - min);
  }
}
