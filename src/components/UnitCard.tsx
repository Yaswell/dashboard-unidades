import {
  Users,
  UserCheck,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Progress from "./Progress";

function UnitCard({ unit }: { unit: any }) {
  if (!unit) return null;

  const getProgress = () => {
    const total = unit.miembros + unit.adultos + unit.jovenes + unit.sacerdocio;
    const faltan =
      unit.faltanMiembros +
      unit.faltanAdultos +
      unit.faltanJovenes +
      unit.faltanMP;
    if (total === 0) return 0;
    return Math.max(
      0,
      Math.min(100, Math.round(((total - faltan) / total) * 100)),
    );
  };

  const progress = getProgress();
  const isComplete = progress === 100;

  return (
    <div className={`unit-card ${isComplete ? "card-complete" : ""}`}>
      <div className="card-header">
        <h2>{unit.unidad}</h2>
        {isComplete ? (
          <CheckCircle2 className="icon-success" size={24} />
        ) : (
          <AlertCircle className="icon-pending" size={24} />
        )}
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <Users size={16} /> <span>Miembros</span> <b>{unit.miembros}</b>
        </div>
        <div className="stat-item">
          <UserCheck size={16} /> <span>Adultos</span> <b>{unit.adultos}</b>
        </div>
        <div className="stat-item">
          <Zap size={16} /> <span>Jóvenes</span> <b>{unit.jovenes}</b>
        </div>
        <div className="stat-item">
          <ShieldCheck size={16} /> <span>PDI</span> <b>{unit.sacerdocio}</b>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-info">
          <span>Cumplimiento</span>
          <span className="percentage">{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>

      {(unit.faltanMiembros > 0 ||
        unit.faltanAdultos > 0 ||
        unit.faltanJovenes > 0 ||
        unit.faltanMP > 0) && (
        <div className="faltan-wrapper">
          <span className="faltan-label">Pendientes:</span>
          <div className="badge-group">
            {unit.faltanMiembros > 0 && (
              <span className="badge">-{unit.faltanMiembros} Miembros</span>
            )}
            {unit.faltanAdultos > 0 && (
              <span className="badge">-{unit.faltanAdultos} Adultos</span>
            )}
            {unit.faltanJovenes > 0 && (
              <span className="badge">-{unit.faltanJovenes} Jóvenes</span>
            )}
            {unit.faltanMP > 0 && (
              <span className="badge">-{unit.faltanMP} PDI</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UnitCard;
