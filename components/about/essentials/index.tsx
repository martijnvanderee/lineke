import S from "./style";

//components
import {
  Essential1,
  Essential2,
  Essential3,
  Essential4
} from "../../../blocks";

type Props = {};

export const Essentials: React.FunctionComponent<Props> = () => (
  <S>
    <S.Essentialflex>
      <Essential1 title="super lieve lach">
        Freedom of expression and no templates, plugins, or other nonsense.
        Build your digital products API-first and exactly how you envision them.
      </Essential1>
    </S.Essentialflex>
    <S.Essentialflex>
      <Essential2 title="mooie ogen">
        Mobile, web, VR, IoT, the lot - all serviced by a single GraphQL API
        with automatic documentation, advanced filters, and type safety. Build
        today for platforms of tomorrow.
      </Essential2>
    </S.Essentialflex>
    <S.Essentialflex>
      <Essential3 title="straalt altijd">
        Enterprise-grade infrastructure managed by our team of experts. We take
        care of the bottlenecks, so you can focus on what truly matters - your
        product.
      </Essential3>
    </S.Essentialflex>
    <S.Essentialflex>
      <Essential4 title="en een bol neusje">
        Freedom of expression and no templates, plugins, or other nonsense.
        Build your digital products API-first and exactly how you envision them.
      </Essential4>
    </S.Essentialflex>
  </S>
);
