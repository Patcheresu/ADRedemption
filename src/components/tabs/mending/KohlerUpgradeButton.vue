<script>
import CostDisplay from "@/components/CostDisplay";
import DescriptionDisplay from "@/components/DescriptionDisplay";
import EffectDisplay from "@/components/EffectDisplay";
import HintText from "@/components/HintText";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";

export default {
  name: "MendingUpgradeButton",
  components: {
    PrimaryToggleButton,
    DescriptionDisplay,
    EffectDisplay,
    CostDisplay,
    HintText
  },
  props: {
    upgrade: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isAvailableForPurchase: false,
      canBeBought: false,
      isRebuyable: false,
      isBought: false,
      isAutoUnlocked: false,
      isAutobuyerOn: false,
      canBeLocked: false,
      hasRequirementLock: false
    };
  },
  computed: {
    config() {
      return this.upgrade.config;
    },
    classObject() {
      return {
        "c-mending-upgrade-btn--useless": this.isUseless,
        "c-mending-upgrade-btn--bought": this.isBought && !this.isUseless,
        "c-mending-upgrade-btn--unavailable": !this.isBought && !this.canBeBought && this.isAvailableForPurchase,
        "c-mending-upgrade-btn--possible": !this.isAvailableForPurchase && this.isPossible,
        "c-mending-upgrade-btn--locked": !this.isAvailableForPurchase && !this.isPossible,
      };
    },
    requirementConfig() {
      return {
        description: this.config.requirement
      };
    },
    canLock() {
      return this.config.canLock && !(this.isAvailableForPurchase || this.isBought);
    }
  },
  methods: {
    update() {
      const upgrade = this.upgrade;
      this.isAvailableForPurchase = upgrade.isAvailableForPurchase;
      this.canBeBought = upgrade.canBeBought;
      this.isRebuyable = upgrade.isRebuyable;
      this.isBought = !upgrade.isRebuyable && upgrade.isBought;
      this.isPossible = upgrade.isPossible;
      this.isAutoUnlocked = Ra.unlocks.instantECAndRealityUpgradeAutobuyers.canBeApplied;
      this.canBeLocked = upgrade.config.canLock && !this.isAvailableForPurchase;
      this.hasRequirementLock = upgrade.hasPlayerLock;
      //if (this.isRebuyable) this.isAutobuyerOn = Autobuyer.mendingUpgrade(upgrade.id).isActive;
    },
    toggleLock(upgrade) {
      if (this.isRebuyable) return;
      upgrade.toggleMechanicLock();
    }
  }
};
</script>

<template>
  <div class="l-spoon-btn-group">
    <button
      :class="classObject"
      class="l-mending-upgrade-btn c-mending-upgrade-btn"
      @click.shift.exact="toggleLock(upgrade)"
      @click.exact="upgrade.purchase()"
    >
      <HintText
        type="mendingUpgrades"
        class="l-hint-text--mending-upgrade c-hint-text--mending-upgrade"
      >
        {{ config.name }}
      </HintText>
      <span>
        <DescriptionDisplay :config="config" />
        <template v-if="($viewModel.shiftDown === isAvailableForPurchase) && !isRebuyable">
          <br>
          <DescriptionDisplay
            :config="requirementConfig"
            label="Requirement:"
            class="c-mending-upgrade-btn__requirement"
          />
        </template>
        <template v-else>
          <EffectDisplay
            :config="config"
            br
          />
          <CostDisplay
            v-if="!isBought"
            :config="config"
            br
            name="Fragmented Remain"
          />
        </template>
      </span>
    </button>
    <div
      v-if="canBeLocked"
      class="o-requirement-lock"
    >
      <i
        v-if="hasRequirementLock"
        class="fas fa-lock"
      />
      <i
        v-else-if="canLock"
        class="fas fa-lock-open"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
