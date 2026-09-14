import React, { useState, useEffect } from 'react';
import { 
  getPixelConfig, 
  savePixelConfig, 
  getInflowStats, 
  getVisitLogs, 
  clearVisitLogs, 
  detectTrafficSource, 
  simulateTrafficChannel, 
  trackLead, 
  PixelConfig, 
  TrafficChannel, 
  CHANNEL_METADATA 
} from '../utils/tracker';
import { 
  BarChart3, 
  Activity, 
  CheckCircle2, 
  ExternalLink, 
  Save, 
  Trash2, 
  RefreshCw, 
  HelpCircle, 
  Send, 
  Sliders, 
  Users, 
  Flame, 
  MousePointerClick 
} from 'lucide-react';

interface TrackingPixelManagerProps {
  themeColor: string;
  lang: string;
}

export const TrackingPixelManager: React.FC<TrackingPixelManagerProps> = ({ themeColor, lang }) => {
  const [config, setConfig] = useState<PixelConfig>(getPixelConfig());
  const [stats, setStats] = useState(getInflowStats());
  const [logs, setLogs] = useState(getVisitLogs());
  const [currentAttribution, setCurrentAttribution] = useState(detectTrafficSource());
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [testSuccess, setTestSuccess] = useState<string | null>(null);

  const refreshData = () => {
    setStats(getInflowStats());
    setLogs(getVisitLogs());
    setCurrentAttribution(detectTrafficSource());
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    savePixelConfig(config);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleTestConversion = () => {
    trackLead('Admin_Test_Conversion', { test: true });
    refreshData();
    setTestSuccess('모든 활성 픽셀로 전환(Lead) 이벤트가 성공적으로 발송되었습니다.');
    setTimeout(() => setTestSuccess(null), 4000);
  };

  const handleSimulate = (channel: TrafficChannel) => {
    simulateTrafficChannel(channel);
    refreshData();
  };

  const handleClearLogs = () => {
    if (window.confirm('모든 방문 유입 로그를 초기화하시겠습니까?')) {
      clearVisitLogs();
      refreshData();
    }
  };

  return (
    <div className="space-y-10">
      {/* Current User Session Inflow Banner */}
      <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs text-gray-400 font-semibold tracking-wider uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>현재 접속 브라우저 유입 감지</span>
          </div>
          <div className="flex items-center space-x-3">
            <span 
              className="px-3 py-1 text-sm font-bold rounded-lg" 
              style={{ backgroundColor: CHANNEL_METADATA[currentAttribution.channel]?.bg || '#333', color: CHANNEL_METADATA[currentAttribution.channel]?.color || '#fff' }}
            >
              {currentAttribution.channelName}
            </span>
            <span className="text-xs text-gray-400">
              Source: <strong className="text-white">{currentAttribution.source}</strong> / Medium: <strong className="text-white">{currentAttribution.medium}</strong>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={refreshData}
            className="flex items-center space-x-1.5 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-colors"
          >
            <RefreshCw size={14} />
            <span>새로고침</span>
          </button>
          <button
            onClick={handleTestConversion}
            className="flex items-center space-x-1.5 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 rounded-lg text-xs font-medium transition-colors"
          >
            <Send size={14} />
            <span>픽셀 전환 이벤트 테스트</span>
          </button>
        </div>
      </div>

      {testSuccess && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm flex items-center space-x-2 animate-fadeIn">
          <CheckCircle2 size={16} />
          <span>{testSuccess}</span>
        </div>
      )}

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-zinc-900/90 border border-white/5 rounded-2xl">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">총 유입 방문수</span>
            <Users size={18} className="text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-white tracking-tight">{stats.totalVisits.toLocaleString()}</div>
          <p className="text-xs text-gray-500 mt-2">모든 추적 채널의 총 접속 수치</p>
        </div>

        <div className="p-6 bg-zinc-900/90 border border-white/5 rounded-2xl">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">텔레그램 커뮤니티 전환</span>
            <MousePointerClick size={18} className="text-emerald-500" />
          </div>
          <div className="text-3xl font-bold text-emerald-400 tracking-tight">{stats.totalConversions.toLocaleString()}</div>
          <p className="text-xs text-gray-500 mt-2">커뮤니티 입장 및 1:1 상담 클릭 수</p>
        </div>

        <div className="p-6 bg-zinc-900/90 border border-white/5 rounded-2xl">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">평균 전환율 (CVR)</span>
            <Flame size={18} className="text-amber-500" />
          </div>
          <div className="text-3xl font-bold text-amber-400 tracking-tight">{stats.totalCr}%</div>
          <p className="text-xs text-gray-500 mt-2">방문자 대비 리드 행동 전환 비율</p>
        </div>
      </div>

      {/* Channel Breakdown Breakdown */}
      <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">채널별 유입 및 전환 현황</h3>
            <p className="text-xs text-gray-400 mt-1">
              메타(페이스북/인스타), 틱톡, 카카오톡, 유튜브, 구글, 네이버 등 채널별 성과
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(Object.keys(CHANNEL_METADATA) as TrafficChannel[]).map((channel) => {
            const meta = CHANNEL_METADATA[channel];
            const channelStat = stats.channelStats[channel] || { visits: 0, conversions: 0, cr: 0 };
            const percentage = stats.totalVisits > 0 ? ((channelStat.visits / stats.totalVisits) * 100).toFixed(1) : '0.0';

            return (
              <div 
                key={channel}
                className="p-4 rounded-xl border border-white/5 bg-zinc-950/60 flex flex-col justify-between hover:border-white/20 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="px-2.5 py-1 text-xs font-bold rounded-md"
                      style={{ backgroundColor: meta.bg, color: meta.color }}
                    >
                      {meta.name}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{percentage}% 점유</span>
                  </div>

                  <div className="flex items-baseline justify-between mt-2">
                    <span className="text-2xl font-bold text-white">{channelStat.visits} <span className="text-xs text-gray-400 font-normal">방문</span></span>
                    <span className="text-sm font-semibold text-emerald-400">{channelStat.conversions} <span className="text-xs text-gray-400 font-normal">전환</span></span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-3 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500" 
                      style={{ 
                        width: `${channelStat.cr}%`, 
                        backgroundColor: meta.color 
                      }} 
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/5 text-[11px] text-gray-400">
                  <span>전환율 (CVR)</span>
                  <strong className="text-white font-mono">{channelStat.cr}%</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fast Inflow Simulation Testing */}
      <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white flex items-center space-x-2">
            <Sliders size={20} className="text-purple-400" />
            <span>유입 경로 즉시 테스트 (시뮬레이션)</span>
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            아래 버튼을 클릭하면 각 플랫폼 광고 링크나 공유 메시지를 타고 들어온 것과 동일한 URL 파라미터(UTM/Click ID)를 주입하여 추적 엔진이 정상 작동하는지 바로 확인할 수 있습니다.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => handleSimulate('meta')}
            className="px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 border border-blue-500/30 text-blue-400 bg-blue-500/10"
          >
            Meta (인스타그램 광고 유입)
          </button>
          <button
            onClick={() => handleSimulate('kakaotalk')}
            className="px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 border border-yellow-500/30 text-yellow-400 bg-yellow-500/10"
          >
            카카오톡 (채널 메시지 유입)
          </button>
          <button
            onClick={() => handleSimulate('youtube')}
            className="px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 border border-red-500/30 text-red-400 bg-red-500/10"
          >
            YouTube (영상 설명란 링크)
          </button>
          <button
            onClick={() => handleSimulate('naver')}
            className="px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 border border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
          >
            네이버 (파워링크/검색광고 유입)
          </button>
          <button
            onClick={() => handleSimulate('google')}
            className="px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 border border-sky-500/30 text-sky-400 bg-sky-500/10"
          >
            Google (키워드 검색광고 gclid)
          </button>
          <button
            onClick={() => handleSimulate('tiktok')}
            className="px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 border border-pink-500/30 text-pink-400 bg-pink-500/10"
          >
            TikTok (숏폼 광고 ttclid)
          </button>
          <button
            onClick={() => handleSimulate('telegram')}
            className="px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 border border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
          >
            텔레그램 (채널 포워딩 링크)
          </button>
          <button
            onClick={() => handleSimulate('direct')}
            className="px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 border border-zinc-500/30 text-zinc-300 bg-zinc-800"
          >
            직접 접속 (Direct / Bookmark)
          </button>
        </div>
      </div>

      {/* Multi-Pixel ID Configuration Form */}
      <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">광고 플랫폼 픽셀 ID 설정</h3>
            <p className="text-xs text-gray-400 mt-1">
              각 플랫폼에서 발급받은 픽셀/측정 ID를 입력해두시면 스크립트가 자동 연동되어 PageView 및 Lead(커뮤니티 입장 클릭) 이벤트가 즉시 전송됩니다.
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meta Pixel */}
            <div className="p-5 bg-zinc-950 border border-white/5 rounded-2xl">
              <label className="block text-sm font-bold text-white mb-1 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1877F2]"></span>
                <span>Meta (Facebook / Instagram) Pixel ID</span>
              </label>
              <p className="text-xs text-gray-500 mb-3">메타 광고 관리자 이벤트 관리자에서 발급받은 숫자 ID</p>
              <input
                type="text"
                value={config.metaPixelId}
                onChange={e => setConfig({ ...config, metaPixelId: e.target.value.trim() })}
                placeholder="예: 123456789012345"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-mono transition-colors"
              />
            </div>

            {/* TikTok Pixel */}
            <div className="p-5 bg-zinc-950 border border-white/5 rounded-2xl">
              <label className="block text-sm font-bold text-white mb-1 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FE2C55]"></span>
                <span>TikTok Pixel ID</span>
              </label>
              <p className="text-xs text-gray-500 mb-3">틱톡 광고 관리자 이벤트 메뉴의 픽셀 코드</p>
              <input
                type="text"
                value={config.tiktokPixelId}
                onChange={e => setConfig({ ...config, tiktokPixelId: e.target.value.trim() })}
                placeholder="예: C1234567890ABCDEF"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-pink-500 font-mono transition-colors"
              />
            </div>

            {/* Kakao Pixel */}
            <div className="p-5 bg-zinc-950 border border-white/5 rounded-2xl">
              <label className="block text-sm font-bold text-white mb-1 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEE500]"></span>
                <span>Kakao Pixel ID (카카오 픽셀)</span>
              </label>
              <p className="text-xs text-gray-500 mb-3">카카오 비즈니스 픽셀 & SDK에서 생성한 Track ID</p>
              <input
                type="text"
                value={config.kakaoPixelId}
                onChange={e => setConfig({ ...config, kakaoPixelId: e.target.value.trim() })}
                placeholder="예: 1234567890123456789"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-500 font-mono transition-colors"
              />
            </div>

            {/* Google Tag */}
            <div className="p-5 bg-zinc-950 border border-white/5 rounded-2xl">
              <label className="block text-sm font-bold text-white mb-1 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
                <span>Google Tag / GA4 측정 ID</span>
              </label>
              <p className="text-xs text-gray-500 mb-3">구글 애널리틱스 4 (G-) 또는 구글 광고 전환 태그 (AW-)</p>
              <input
                type="text"
                value={config.googleTagId}
                onChange={e => setConfig({ ...config, googleTagId: e.target.value.trim() })}
                placeholder="예: G-XXXXXXXXXX 또는 AW-XXXXXXXXX"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-mono transition-colors"
              />
            </div>

            {/* Naver Log */}
            <div className="p-5 bg-zinc-950 border border-white/5 rounded-2xl md:col-span-2">
              <label className="block text-sm font-bold text-white mb-1 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#03C75A]"></span>
                <span>네이버 공통 유입 스크립트 / 전환 로그 계정 (wcs.wa)</span>
              </label>
              <p className="text-xs text-gray-500 mb-3">네이버 검색광고 프리미엄 로그분석 또는 웹로그 계정 ID</p>
              <input
                type="text"
                value={config.naverPixelId}
                onChange={e => setConfig({ ...config, naverPixelId: e.target.value.trim() })}
                placeholder="예: s_123456789abc"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 pt-4 border-t border-white/10">
            {saveSuccess && (
              <span className="text-emerald-400 text-sm flex items-center space-x-1.5 animate-fadeIn">
                <CheckCircle2 size={16} />
                <span>픽셀 설정이 성공적으로 저장되었습니다!</span>
              </span>
            )}
            <button
              type="submit"
              className="flex items-center space-x-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: themeColor }}
            >
              <Save size={18} />
              <span>픽셀 설정 저장</span>
            </button>
          </div>
        </form>
      </div>

      {/* Recent Inflow Visit Logs Table */}
      <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">최근 유입 방문 로그 (Recent Visits)</h3>
            <p className="text-xs text-gray-400 mt-1">방문자의 유입 소스, 매체, 유입 일시 및 텔레그램 커뮤니티 전환 여부</p>
          </div>
          {logs.length > 0 && (
            <button
              onClick={handleClearLogs}
              className="text-xs text-red-400 hover:text-red-300 flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-colors"
            >
              <Trash2 size={14} />
              <span>로그 지우기</span>
            </button>
          )}
        </div>

        {logs.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-sm">
            아직 기록된 유입 로그가 없습니다. 상단의 시뮬레이션 버튼으로 테스트해보세요.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-white/10 text-gray-400 uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">유입 채널</th>
                  <th className="py-3 px-4">Source / Medium</th>
                  <th className="py-3 px-4">Campaign</th>
                  <th className="py-3 px-4">방문 시각</th>
                  <th className="py-3 px-4 text-center">전환 상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {logs.map((log) => {
                  const meta = CHANNEL_METADATA[log.channel] || CHANNEL_METADATA.other;
                  const dateStr = new Date(log.timestamp).toLocaleString();

                  return (
                    <tr key={log.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4">
                        <span 
                          className="px-2 py-0.5 rounded text-[11px] font-bold"
                          style={{ backgroundColor: meta.bg, color: meta.color }}
                        >
                          {meta.name}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-gray-300">
                        {log.source} <span className="text-gray-600">/</span> {log.medium}
                      </td>
                      <td className="py-3 px-4 text-gray-400">
                        {log.campaign !== 'none' ? log.campaign : <span className="text-gray-600">-</span>}
                      </td>
                      <td className="py-3 px-4 text-gray-400">
                        {dateStr}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {log.converted ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            <CheckCircle2 size={12} />
                            <span>전환 완료</span>
                          </span>
                        ) : (
                          <span className="text-gray-600 text-[11px]">방문 중</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
