/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_AllianceItem extends fgui.GComponent {

	public m_n7:fgui.GImage;
	public m_pic:fgui.GLoader;
	public m_name:fgui.GTextField;
	public m_level:fgui.GTextField;
	public m_n12:fgui.GImage;
	public m_num:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugnkrtjj";

	public static createInstance():UI_AllianceItem {
		return <UI_AllianceItem>(fgui.UIPackage.createObject("com", "AllianceItem"));
	}

	protected onConstruct():void {
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_level = <fgui.GTextField>(this.getChild("level"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_num = <fgui.GTextField>(this.getChild("num"));
	}
}