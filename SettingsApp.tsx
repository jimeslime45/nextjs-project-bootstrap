"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { PhoneState } from "@/components/GameInterface";

interface SettingsAppProps {
  phoneState: PhoneState;
  setPhoneState: React.Dispatch<React.SetStateAction<PhoneState>>;
  onAttack: (attackType: string, damage: number) => void;
  onDefend: (defenseType: string) => void;
  isPlayer: boolean;
}

export function SettingsApp({ phoneState, setPhoneState, onAttack, onDefend, isPlayer }: SettingsAppProps) {
  const [autoDefense, setAutoDefense] = useState(false);
  const [powerSaving, setPowerSaving] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSystemReset = () => {
    if (!isPlayer) return;
    
    setPhoneState(prev => ({
      ...prev,
      health: Math.min(100, prev.health + 30),
      cpuUsage: Math.max(20, prev.cpuUsage - 20),
      ramUsage: Math.max(30, prev.ramUsage - 15),
      virusCount: Math.max(0, prev.virusCount - 1)
    }));
  };

  const handleEmergencyShutdown = () => {
    if (!isPlayer) return;
    
    setPhoneState(prev => ({
      ...prev,
      cpuUsage: 10,
      ramUsage: 20,
      battery: Math.max(0, prev.battery - 5) // Costs battery but saves system
    }));
  };

  const handleSystemOptimization = () => {
    if (!isPlayer) return;
    
    setPhoneState(prev => ({
      ...prev,
      cpuUsage: Math.max(15, prev.cpuUsage - 25),
      ramUsage: Math.max(25, prev.ramUsage - 20),
      health: Math.min(100, prev.health + 10)
    }));
  };

  const handleAutoDefenseToggle = (enabled: boolean) => {
    setAutoDefense(enabled);
    if (enabled && isPlayer) {
      onDefend('firewall');
    }
  };

  const handlePowerSavingToggle = (enabled: boolean) => {
    setPowerSaving(enabled);
    if (enabled && isPlayer) {
      onDefend('battery_saver');
    }
  };

  return (
    <div className="h-full space-y-4">
      {/* System Controls */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-3">System Controls</h3>
        <div className="space-y-3">
          <Button 
            onClick={handleSystemReset}
            disabled={!isPlayer}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            System Reset (+30 Health)
          </Button>
          
          <Button 
            onClick={handleSystemOptimization}
            disabled={!isPlayer}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Optimize Performance
          </Button>
          
          <Button 
            onClick={handleEmergencyShutdown}
            disabled={!isPlayer}
            className="w-full bg-yellow-600 hover:bg-yellow-700"
          >
            Emergency Shutdown
          </Button>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-3">Security Settings</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white text-sm">Auto Defense</div>
              <div className="text-gray-400 text-xs">Automatically enable firewall when attacked</div>
            </div>
            <Switch 
              checked={autoDefense}
              onCheckedChange={handleAutoDefenseToggle}
              disabled={!isPlayer}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white text-sm">Power Saving Mode</div>
              <div className="text-gray-400 text-xs">Reduce performance to save battery</div>
            </div>
            <Switch 
              checked={powerSaving}
              onCheckedChange={handlePowerSavingToggle}
              disabled={!isPlayer}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white text-sm">Security Notifications</div>
              <div className="text-gray-400 text-xs">Get alerts about threats</div>
            </div>
            <Switch 
              checked={notifications}
              onCheckedChange={setNotifications}
              disabled={!isPlayer}
            />
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-3">System Information</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-300">OS Version</span>
            <span className="text-white">Sabotage OS 1.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Security Level</span>
            <span className={phoneState.antivirusActive ? 'text-green-400' : 'text-red-400'}>
              {phoneState.antivirusActive ? 'Protected' : 'Vulnerable'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">System Uptime</span>
            <span className="text-white">00:05:23</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Last Update</span>
            <span className="text-white">Today</span>
          </div>
        </div>
      </div>

      {/* Performance Settings */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-3">Performance</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-300">CPU Priority</span>
            <select 
              className="bg-gray-700 text-white rounded px-2 py-1 text-xs"
              disabled={!isPlayer}
            >
              <option>Balanced</option>
              <option>Performance</option>
              <option>Power Saver</option>
            </select>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-300">Memory Management</span>
            <select 
              className="bg-gray-700 text-white rounded px-2 py-1 text-xs"
              disabled={!isPlayer}
            >
              <option>Auto</option>
              <option>Aggressive</option>
              <option>Conservative</option>
            </select>
          </div>
        </div>
      </div>

      {/* Emergency Actions */}
      <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
        <h3 className="text-red-400 font-semibold mb-3">Emergency Actions</h3>
        <div className="space-y-2">
          <Button 
            onClick={() => isPlayer && onDefend('repair')}
            disabled={!isPlayer}
            variant="destructive"
            className="w-full bg-red-600 hover:bg-red-700"
          >
            Emergency Repair
          </Button>
          <p className="text-red-300 text-xs">
            Use only when system health is critical
          </p>
        </div>
      </div>
    </div>
  );
}
